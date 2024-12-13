let findAndReplacePattern= function(words, pattern){
    let array= [];
    for(let i= 0; i<words.length; i++){
        let alphabets= {};
        let obj= {};
        let patIndex= 0;
        let isFalse= false;
        for(let k=0; k<words[i].length; k++){            
            if(obj[pattern[patIndex]]==undefined&&alphabets[words[i][k]]==undefined){
                obj[pattern[patIndex]]= words[i][k];    
                alphabets[words[i][k]]= 1;                 
            }
            else{
                if(obj[pattern[patIndex]]!=words[i][k]){
                    isFalse= true;
                    break;
                }                
            }
            patIndex++;
        }
        if(!isFalse){
            array.push(words[i]);
        }
    }
    return array;    
};