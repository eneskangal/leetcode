let maxDistinct= function(s){
    let hash= {};
    let count= 0;
    
    for(let i= 0; i<s.length; i++){
        if(hash[s[i]]==undefined){
            hash[s[i]]= true;
            count++;
        }
    }    
    return count;
};