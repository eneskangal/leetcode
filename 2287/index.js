let rearrangeCharacters= function(s, t){
    if(s.length<t.length){
        return 0;
    }

    let hash= {};
    let secondHash= {};
    for(let i= 0; i<s.length; i++){
        if(hash[s[i]]==undefined){
            hash[s[i]]= 1;
        }        
        else{
            hash[s[i]]++;
        }
    }

    for(let i= 0; i<t.length; i++){
        if(secondHash[t[i]]==undefined){
            secondHash[t[i]]= 1;
        }        
        else{
            secondHash[t[i]]++;
        }
    }  

    let answer= 9999;
    for(let ch in secondHash){
        answer= Math.min(answer, hash[ch]==undefined ? 0 : Math.trunc(hash[ch]/secondHash[ch]));
    }  
    return answer==9999 ? 0 : answer;
};