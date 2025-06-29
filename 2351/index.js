let repeatedCharacter= function(s){
    const obj= {};
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]){
            return s[i];
        }
        obj[s[i]]= s[i];
    }    
};