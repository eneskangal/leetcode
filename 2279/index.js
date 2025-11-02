let maximumBags= function(capacity, rocks, additionalRocks){
    let count= 0;
    let array= [];
    for(let i= 0; i<capacity.length; i++){
        if(capacity[i]!=rocks[i]){
            array.push(capacity[i]-rocks[i]);
        }
        else{
            count++;
        }
    }  


    array= array.sort((a,b)=>{
        return a-b;
    });
    
    for(let i= 0; i<array.length; i++){
        if(array[i]<=additionalRocks){
            additionalRocks -= array[i];
            count++;
        }
        else{
            return count;
        }
    }
    return count;
};