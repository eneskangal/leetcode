let smallerNumbersThanCurrent= function(nums){
    let data=[]
    for(let i=0; i<nums.length; i++){
        let filter=nums.filter(t=>t<nums[i])
        data.push(filter.length)
    }
    return data
}
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))