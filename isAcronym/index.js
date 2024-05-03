let isAcronym= function(words, s){
    if(words.length!=s.length){
        return false;
    }
    for(let i=0; i<s.length; i++){
        if(words[i][0]!=s[i]){
            return false;
        }
    }
    return true;
};