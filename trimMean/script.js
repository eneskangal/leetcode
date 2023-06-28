let trimMean= function(arr){
    let arr2=arr
    let silinecekSayilar=Math.round(arr.length*5/(100))
    arr2.sort((a,b)=>{
        return a-b
    })
    return arr2.slice(0+silinecekSayilar,arr2.length-silinecekSayilar).reduce((a,b)=>{
        return a+b
    })/(arr.length-(silinecekSayilar*2))
}
console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))