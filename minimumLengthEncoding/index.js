let minimumLengthEncoding= function(words){
    let length= words.length;
    for(let i= 0; i<words.length; i++){
        length+= words[i].length;         
        for(let k= i-1; k>-1; k--){   
            if(words[k]!=undefined&&words[i].length>words[k].length){
                let index= words[i].indexOf(words[k]);
                if(index>-1&&index+words[k].length>=words[i].length){
                    length-= words[k].length+1;
                    words[k]= undefined;
                    break;
                }                
            }
            else if(words[i]==words[k]){
                let index= words[k].lastIndexOf(words[i]);
                if(index==0){
                    length-= words[i].length+1;
                    break;
                }                                  
            }
            else if(words[k]!=undefined&&words[i].length<words[k].length){
                let index= words[k].lastIndexOf(words[i]);
                if(index>-1&&index+words[i].length>=words[k].length){
                    length-= words[i].length+1;
                    words[i]= undefined;
                    break;
                }              
            }                                     
        }             
    }
    return length;    
};