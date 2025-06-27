let minSteps= function(n){
    if(n==1){
        return 0;
    }
    let count= 0;
    for(let i= 2; i<n; i++){
        if(n%i==0){
            return minSteps(n/i)+(i);
        }        
    }
    return n;  
};