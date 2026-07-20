let findClosestElements= function(arr, k, x){
    let array= [];
    for(let i= 0; i<arr.length; i++){
        array.push({prior: Math.abs(arr[i]-x), val: arr[i]});
    }    
    
    array.sort((a,b)=>{
        return a.prior-b.prior;
    });

    let returnArray= [];
    for(let i= 0; i<k; i++){
        returnArray.push(array[i].val);
    }

    return returnArray.sort((a,b)=>{
        return a-b;
    });
};