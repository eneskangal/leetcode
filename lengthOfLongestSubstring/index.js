let lengthOfLongestSubstring= function(s){
    let text;
    let maxText;
    let index= 0;
    for(let i=0; i<s.length; i++){
        if(text==undefined){
            text= s[i];
        } 
        else{
            if(text.indexOf(s[i])==-1){
                text+= s[i];
            }
            else{
                if(maxText==undefined){
                    maxText= text;
                }
                if(maxText.length<text.length){
                    maxText= text;
                }                
                i= index;
                index++;
                text= undefined;
            }
        }           
    }
    if(maxText==undefined){
        if(text==undefined){
            return 0;
        }
        else{
            return text.length;
        }
    }
    if(text.length>maxText.length){
        return text.length;
    }
    return maxText.length;
};