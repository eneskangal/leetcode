let filter= function(arr, fn){
    let data=[]
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i])){
            data.push(arr[i])
        }
    } 
    return data   
}
let arr= [0,10,20,30]
console.log(filter([0,10,20,30],function greaterThan10(n) { return n > 10; }))