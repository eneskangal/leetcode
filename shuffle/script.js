let shuffle= function(nums, n){
    let data=[]
    for(let i=0; i<nums.length-n; i++){
        data.push(nums[i])
        data.push(nums[i+n])
    }
    return data   
}
console.log(shuffle([2,5,1,3,4,7],3))