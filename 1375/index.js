let numTimesAllBlue= function(flips){
    let sum= 0;
    let count= 0;
    let sumofNumbers= 1;
    let numbers= 2;
    for(let i= 0; i<flips.length; i++){
        if(sum+flips[i]==sumofNumbers){
            count++;
        }
        sumofNumbers+= numbers;
        sum+= flips[i];
        numbers++;
    }    
    return count;
};