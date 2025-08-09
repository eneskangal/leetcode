let countCharacters= function(words, chars){
    let hash= {};
    let count= 0;
    let sum= 0;

    for(let i= 0; i<chars.length; i++){
        if(hash[chars[i]]==undefined){
            hash[chars[i]]= 1;
            count++;
        }
        else{
            hash[chars[i]]+= 1;
            count++;
        }
    }
    let copy= {...hash};
    for(let i= 0; i<words.length; i++){
        let subCount= 0;
        let wordLength= words[i].length;
        for(let k= 0; k<wordLength; k++){
            if(hash[words[i][k]]==1){
                delete hash[words[i][k]];  
                subCount++;        
            }
            else if(hash[words[i][k]]>1){
                hash[words[i][k]]-= 1;   
                subCount++;   
            }       
        }
        if(subCount==wordLength){
            sum+= wordLength;
        }
        hash= {...copy};        
    } 
    return sum;   
};