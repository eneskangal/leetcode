let divisibilityArray= function(word, m){
    let results= [];
    let numMod= 0;
    for(let i= 0; i<word.length; i++){
        numMod = (numMod * 10 + Number(word[i])) % m;
        results.push(numMod === 0 ? 1 : 0);
    }    

    return results;
};