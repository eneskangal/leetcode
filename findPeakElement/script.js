let findPeakElement= function(nums){
    let deger=nums[0]
    for(let i=0; i<nums.length; i++){
        if(deger<=nums[i]){
            deger=nums[i]
        }
    }
    return nums.indexOf(deger)
}
console.log(findPeakElement([1,2,3,1]))