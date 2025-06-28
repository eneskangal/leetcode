var xorOperation = function(n, start) {
    const array= Array(n);
    let returnValue;
    for(let i=0; i<n; i++){
        array[i]= start+2*i;
    }
    for(let i=0; i<array.length; i++){
        if(returnValue==undefined){
            returnValue= array[i-1]^array[i];
        }
        else{
            returnValue= returnValue^array[i];
        }
    }
    return returnValue;
};