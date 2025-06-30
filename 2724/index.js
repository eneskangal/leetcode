let sortBy= function(arr, fn){
    return arr.sort((a,b)=>{
        return fn(a)-fn(b);
    }); 
};