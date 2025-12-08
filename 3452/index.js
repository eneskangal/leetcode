let sumOfGoodNumbers= function(nums, k){
    let sum= 0;
    for(let i= 0; i<nums.length; i++){
        if(nums[i+k]==undefined&&nums[i-k]==undefined){
            sum+= nums[i];
        }
        if(nums[i+k]==undefined&&nums[i-k]<nums[i]){
            sum+= nums[i];
        }
        if(nums[i+k]<nums[i]&&nums[i-k]==undefined){
            sum+= nums[i];
        }
        if(nums[i+k]<nums[i]&&nums[i-k]<nums[i]){
            sum+= nums[i];
        }
    }
    return sum;    
};