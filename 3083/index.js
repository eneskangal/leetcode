let isSubstringPresent= function(s){
    let hash= {};
    for(let i= 0; i<s.length-1; i++){
        hash[s.slice(i, i+2)]= true;
    }    

    for(let i= s.length-1; i>0; i--){
        if(hash[s[i]+s[i-1]]!=undefined){            
            return true;
        }
    }

    return false;
};