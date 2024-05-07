let minOperations= function(nums, k){
    return nums.filter(num=> return num<k).length;
};