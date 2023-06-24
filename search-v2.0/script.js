let search= function(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i]==target){
            return true
        }
    }
    return false    
}
console.log(search([2,5,6,0,0,1,2],0))