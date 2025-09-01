let minimumCost= function(cost){
    cost= cost.sort((a,b)=>{
        return b-a;
    });

    let costLength= cost.length;
    let sum= 0;
    for(let i= 0; i<costLength;){
        if(i+2==costLength){
            sum+= cost[i]+cost[i+1];
            i+= 2;
        }
        else if(i+1==costLength){
            sum+= cost[i];
            i+= 1;
        }
        else{
            sum+= cost[i]+cost[i+1];
            i+= 3;
        }
    }
    return sum;
};