let findMin = function(nums){
    let deger=nums[0]
    for(let i=0; i<nums.length; i++){
        if(nums[i]<=deger){
            deger=nums[i]
        }
    }
    return deger
}
console.log(findMin([1,3,5]))