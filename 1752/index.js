let check= function(nums){
    let arrayLength= nums.length;
    for(let i= 1; i<arrayLength;){
        if(nums[i-1]>nums[i]){            
            if(nums[0]>=nums[arrayLength-1]){
                nums.unshift(nums[arrayLength-1]);
                i+= 0;
            }
            else{
                return false;
            }
        }
        else{
            i++;
        }
    }
    return true;
};