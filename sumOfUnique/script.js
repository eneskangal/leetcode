let sumOfUnique= function(nums){
    let deger=0
    for(let i=0; i<nums.length; i++){
        let filter=nums.filter(t=>t==nums[i])
        if(filter.length==1){
            deger+=filter[0]
        }
    }
    return deger
}
console.log(sumOfUnique([1,2,3,2]))