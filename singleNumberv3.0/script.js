let singleNumber= function(nums){
    let data=[]
    for(let i=0; i<nums.length; i++){
        let filter=nums.filter(t=>t==nums[i])
        if(filter.length==1){
            data.push(filter[0])
        }
    }
    return data
}
console.log(singleNumber([1,2,1,3,2,5]))