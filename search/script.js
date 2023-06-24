let search= function(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i]==target){
            return i
        }
    }
    return -1    
}
console.log(search([2,4,8],7))