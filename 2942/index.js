let findWordsContaining= function(words, x) {
    const returnArray= [];
    for(let i=0; i<words.length; i++){
        if(words[i].includes(x)){
            returnArray.push(i);
        }
    }
    return returnArray; 
};