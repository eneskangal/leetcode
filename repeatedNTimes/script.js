let repeatedNTimes= function(nums){
    for(let i=0; i<nums.length; i++){
        let sonuc=nums.filter(t=>t==nums[i])
        if(sonuc.length>1){
            return sonuc[0]
        }
    }
}
console.log(repeatedNTimes([1,2,3,3]))