let singleNonDuplicate= function(nums){
    for(let i=0; i<nums.length; i++){
        if(nums[i-1]!=nums[i]&&nums[i]!=nums[i+1]){
            return nums[i]
        }
    }
}
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))