let singleNumber= function(nums){
    for(let i=0; i<nums.length; i++){
        let filter=nums.filter(t=>t==nums[i])
        if(filter.length==1){
            return filter[0]
        }
    }
}
console.log(singleNumber([2,2,3,2]))