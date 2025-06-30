let differenceOfSums= function(n, m){
    let divisible= 0;
    let nonDivisible= 0;
    for(let i=1; i<=n; i++){
        if(i%m==0){
            divisible+=i;
        }
        else{
            nonDivisible+=i
        }        
    }    
    return nonDivisible-divisible;    
};