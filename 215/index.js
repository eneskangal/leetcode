let findKthLargest= function(nums, k){
    return nums.sort((a,b)=>{return b-a})[k-1];
};