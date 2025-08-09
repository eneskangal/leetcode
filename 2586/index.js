let vowelStrings= function(words, left, right){
    let count= 0;
    for(let i= left; i<=right; i++){
        if("aeiou".includes(words[i][0])){
            let wordLength= words[i].length-1;
            if("aeiou".includes(words[i][wordLength])){
                count++;
            }
        }
    } 
    return count;   
};