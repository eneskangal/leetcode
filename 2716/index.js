let minimizedStringLength= function(s){
    const charMap= new Map();
    for(let i=0; i<s.length; i++){
        charMap.set(s[i], s[i]);
    }
    return charMap.size;    
};