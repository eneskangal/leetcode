let sumAndMultiply= function(n){
    let convertString= n+"";
    let sum= 0;
    let string= "";
    for(let i= 0; i<convertString.length; i++){
        if(convertString[i]>0){
            sum+= convertString[i]*1;
            string+= convertString[i];
        }
    } 
    return sum*(string-0);   
};