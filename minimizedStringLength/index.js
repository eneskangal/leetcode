let minimizedStringLength= function(s){
    const charMap= new Map();
    for(let i=0; is.length; i++){
        charMap.set(s[i], s[i]);
    }
    return charMap.size;    
};