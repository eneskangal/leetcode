let map= function(arr, fn){
    let data=[]  
    for(let i=0; i<arr.length; i++){       
        data.push(fn(arr[i],i))
    }  
    return data  
}
let arr= [1,2,3]
let fn= function plusone(n){return n+1}
console.log(map(arr, fn))

