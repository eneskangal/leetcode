let findDuplicate= function(nums){
    let data=[]
    for(let i=0; i<nums.length; i++){
        if(data[nums[i]]==undefined){
            data[nums[i]]=nums[i]
        }
        else{
            return nums[i]
        }
    }
}
console.log(findDuplicate([1,3,4,2,2]))