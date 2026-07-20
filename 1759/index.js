let countHomogenous= function(s){
    let previousChar= undefined;
    let subCount= 0;
    let count= 0;
    let mod= (10**9)+7;

    for(let i= 0; i<s.length; i++){
        if(previousChar==undefined){
            previousChar= s[i];
            subCount++;
        }
        else{
            if(previousChar==s[i]){
                subCount++;             
            }
            else{
                count+= ((subCount)*(subCount+1)/2);
                previousChar= s[i];
                subCount= 1;
            }
        }
    }  
    count+= ((subCount)*(subCount+1)/2);
    return count%mod;   
};