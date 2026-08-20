let sumOfPrimesInRange= function(n){
    let reverseN= n+"";
    let newN= "";

    for(let i= reverseN.length-1; i>-1; i--){
        newN+= reverseN[i];
    }    

    let toInteger= parseInt(newN);    
    function isPrime(value){
        for(let i= 2; i<value; i++){
            if(value%i==0){
                return false;
            }
        }
        return true;
    }

    if(toInteger>n){
        let count= 0;
        for(let i= n; i<=toInteger; i++){
            if(isPrime(i)){
                count+= i;
            }
        }
        return count;
    }

    let count= 0;
    for(let i= Math.max(toInteger,2); i<=n; i++){
        if(isPrime(i)){
            count+= i;
        }
    }
    return count;
};