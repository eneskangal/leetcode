let countPrefixes= function(words, s){
    let count= 0;
    for(let i=0; i<words.length; i++){
        if(s.slice(0, words[i].length)==words[i]){
            count++;
        }
    }
    return count;
};