let concatenatedBinary= function(n){
    let length= 0;
    let number= 0;

    for(let i= 1; i<=n; i++){        
        if(i==1){
            number= 1;
            binary= "1";
        }
        else{
            let convert= i.toString(2);
            number= (number*2**(convert.length))+i;
            number%= (10**9)+7;
            binary+= i.toString(2);
        }
    }
    return number; 
};