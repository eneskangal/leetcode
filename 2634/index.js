let filter= function(arr, fn){
    return arr.filter((arr,i)=>{return fn(arr, i)});
};