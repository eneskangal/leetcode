let minSteps= function(s, t){
    let count= 0;
    let hash= {};
    for(let i= 0; i<s.length; i++){
        if(hash[s[i]]==undefined){
            hash[s[i]]= 1;
        }
        else{
            hash[s[i]]+= 1;
        }
    }
    for(let i= 0; i<t.length; i++){
        if(hash[t[i]]==undefined){
            count+= 1;
        }
        else{
            if(hash[t[i]]==1){
                delete hash[t[i]];
            }
            else{
                hash[t[i]]-= 1;
            }
        }        
    } 
    return count;  
};