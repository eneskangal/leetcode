let maxTotalValue= function(nums, k){
    let max= -1;
    let min= 1000000001;
    for(let i= 0; i<nums.length; i++){
        max= Math.max(max, nums[i]);
        min= Math.min(min, nums[i]);
    }  

    return (max-min)*k;
};