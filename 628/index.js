let maximumProduct = function(nums){
    let sortlanMısDizi=nums.sort(function(a, b){return a - b})
    if(nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]>nums[0]*nums[1]*nums[nums.length-1]){
        return nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]
    }
    else{
        return nums[0]*nums[1]*nums[nums.length-1]
    }
}