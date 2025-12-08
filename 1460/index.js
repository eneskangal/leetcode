let canBeEqual= function(target, arr){
    target= target.sort((a,b)=>{
        return a-b;
    });   

    arr= arr.sort((a,b)=>{
        return a-b;
    }); 

    for(let i= 0; i<arr.length; i++){
        if(arr[i]!=target[i]){
            return false;
        }
    }
    return true;
}