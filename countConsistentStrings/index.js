let countConsistentStrings= function(allowed, words){
    let count= 0;
    for(let i=0; i<words.length; i++){
        if(words[i].match("[^"+allowed+"]")==null){
            count++;
        }
    }
    return count;
};