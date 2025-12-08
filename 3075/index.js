let maximumHappinessSum= function(happiness, k){
    happiness= happiness.sort((a,b)=>{
        return b-a;
    });
    
    let sum= 0;
    let reduce= 0;
    let index= 0;
    while(k>0){
        sum+= Math.max(happiness[index]-reduce, 0);
        reduce++;
        k--;
        index++;
    }    
    return sum;
};