let countBits= function(n){
    let array= [];
    for(let i= 0; i<=n; i++){
        let valuetoString= i.toString(2)+"";
        let sum= 0;
        for(let k= 0; k<=valuetoString.length; k++){
            if((i>>k)&1){
                sum+= 1;
            }      
        }
        array[i]= sum;
    }
    return array;    
};