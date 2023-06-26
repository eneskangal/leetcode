let maximizeSum= function(nums, k){
    let deger=0
    let toplama=0
    let max=Math.max(...nums)
    for(let i=0; i<k; i++){
        toplama+=max+deger
        deger++
    }
    return toplama    
}
console.log(maximizeSum([1,2,3,4,5],3))