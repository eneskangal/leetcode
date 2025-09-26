let getFinalState= function(nums, k, multiplier){

    for(let i= 0; i<k; i++){
        let min= 2**31-(1);
        let index= -1;
        for(let j= 0; j<nums.length; j++){
            if(min>nums[j]){
                min= nums[j];
                index= j;
            }
        }
        nums[index]*= multiplier;
    }

    return nums;
};