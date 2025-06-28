let averageWaitingTime= function(customers){
    let previousTime= 0;
    let sum= 0;
    let count= 0;
    for(let i= 0; i<customers.length; i++){
        if(i==0){
            sum+= customers[i][1];
            previousTime= customers[i][1]+customers[i][0];
            count+= 1;
        }
        else{
            if(previousTime>customers[i][0]){
                sum+= previousTime-customers[i][0]+customers[i][1];
                previousTime+= customers[i][1];
                count+= 1;
            }
            else{
                sum+= customers[i][1];
                previousTime= customers[i][1]+customers[i][0];
                count+= 1;                
            }
        }
    }
    return sum/count;   
};