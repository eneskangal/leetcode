let maximumProduct= function(nums, m){
    const n= nums.length;
    let left= n-m;
    let right= n-1;

    let minVal= Infinity;
    let maxVal= -Infinity;
    let result= -Infinity;

    while (left = 0){
        minVal= Math.min(minVal, nums[right]);
        maxVal= Math.max(maxVal, nums[right]);
        result= Math.max(result, nums[left]  minVal, nums[left]  maxVal);
        left--;
        right--;
    }
    return result;
};