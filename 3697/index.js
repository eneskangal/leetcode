let decimalRepresentation= function(n){
    let convertToString= n+"";
    let base= convertToString.length-1;
    let array= [];

    for(let i= 0; i<convertToString.length; i++){
        if(convertToString[i]>0){
            array.push(convertToString[i]*(10**base));
        }        
        base--;
    }

    return array;   
};