let maxFreqSum= function(s){
    let maxVowel= 0;    
    let maxCons= 0; 
    let obj= {};
    for(let i= 0; i<s.length; i++){
        if("aeiou".includes(s[i])){
            if(obj[s[i]]==undefined){
                obj[s[i]]= 1;
                if(maxVowel==0){
                    maxVowel= 1;
                }            
            }
            else{
                if(maxVowel==obj[s[i]]){
                    obj[s[i]]+= 1;
                    maxVowel+= 1;                    
                }
                else{
                    obj[s[i]]+= 1;
                }
            }
        }
        else{
            if(obj[s[i]]==undefined){
                obj[s[i]]= 1;
                if(maxCons==0){
                    maxCons= 1;
                }            
            }
            else{
                if(maxCons==obj[s[i]]){
                    obj[s[i]]+= 1;
                    maxCons+= 1;                    
                }
                else{
                    obj[s[i]]+= 1;
                }
            }
        }
    }
    return maxCons+maxVowel;
};