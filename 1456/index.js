let maxVowels= function(s, k){
    let vowels= {
        "a": "a",
        "e": "e",
        "i": "i",
        "o": "o",
        "u": "u"
    };
    let bitString= "";
    let count= 0;
    for(let i= 0; i<k; i++){
        if(vowels[s[i]]==undefined){
            bitString+= 0;
        }
        else{
            bitString+= 1; 
            count++;
        }
    }
    maxCount= count;
    for(let i= k; i<s.length; i++){
        if(bitString[0]=="1"){
            if(vowels[s[i]]==undefined){
                count--;
                bitString= bitString.slice(1)+"0";
            }
            else{
                bitString= bitString.slice(1)+"1";                
            }
        }
        else{
            if(vowels[s[i]]==undefined){
                bitString= bitString.slice(1)+"0";
            }
            else{
                if(count+1>maxCount){
                    maxCount++;
                    count++;
                    bitString= bitString.slice(1)+"1";    
                }
                else{
                    count++;
                    bitString= bitString.slice(1)+"1";    
                }                            
            }
        }
    }
    return maxCount;
};