let licenseKeyFormatting= function(s, k){
    let wordLength= 0;
    let subWord= "";
    for(let i= s.length-1; i>-1; i--){
        if(s[i]!="-"){
            if(wordLength==k-1){
                subWord= "-"+s[i].toUpperCase()+subWord;  
                wordLength= 0;
            }
            else{
                subWord= s[i].toUpperCase()+subWord;
                wordLength+= 1;  
            }                                  
        }
    }
    return subWord[0]=="-" ? subWord.slice(1) : subWord;         
};