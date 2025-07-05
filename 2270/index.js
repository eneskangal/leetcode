let waysToSplitArray= function(nums){
    let right= 0;
    let count= 0;
    let left= 0;
    for(let i= 1; i<nums.length; i++){
        left+= nums[i];
    }

    let secondIndex= 1;   
    for(let i= 0; i<nums.length-1; i++){
        if(right+nums[i]>=left){
            count++;            
        }
        right+= nums[i];
        left-= nums[secondIndex];
        secondIndex++;
    }    
    return count;
};