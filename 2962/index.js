let countSubarrays= function(nums, k){
    const maxVal= Math.max(...nums);
    let left= 0;
    let maxCount= 0;
    let result= 0;

    for(let right= 0; right<nums.length; right++){
        if(nums[right]===maxVal){
            maxCount++;
        }
        while(maxCount>=k){
            result+= (nums.length-right);
            if(nums[left]===maxVal){
                maxCount--;
            }
            left++;
        }
    }
    return result;
};
