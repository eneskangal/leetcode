let missingNumber= function(nums){    
    let sortlanmıs=nums.sort((a,b)=>{return a-b})
    for(let i=0; i<sortlanmıs.length; i++){
        if(sortlanmıs[i]!=i){
            return i
        }
    }
    return sortlanmıs.length         
}
console.log(missingNumber([3,0,1]))