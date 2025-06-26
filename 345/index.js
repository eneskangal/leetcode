let reverseVowels= function(s){
    const vowels= {
        A:"A",
        E:"E",
        I:"I",
        O:"O",
        U:"U",
        a:"a",
        e:"e",
        i:"i",
        o:"o",
        u:"u"
    };
    const splitS= s.split("");
    let lastIndex= splitS.length-1;
    let length= splitS.length;
    for(let i=0; i<length;){
        if(vowels[s[i]]&&!vowels[s[lastIndex]]){
            lastIndex--;
        }
        else if(!vowels[s[i]]&&vowels[s[lastIndex]]){
            i++;
        }
        else if(!vowels[s[i]]&&!vowels[s[lastIndex]]){
            i++;
            lastIndex--;
        }
        else if(vowels[s[i]]&&vowels[s[lastIndex]]){
            const copy= s[i];
            splitS[i]= s[lastIndex];
            splitS[lastIndex]= copy;
            i++;
            lastIndex--;   
        }        
    }  
    return splitS.join("");  
};