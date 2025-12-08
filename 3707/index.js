let scoreBalance= function(s){
    let prefix= [0];
    for(let i= 0; i<s.length; i++){
        prefix.push(prefix[i]+s[i].charCodeAt(0)-96);
    }    
    for(let i= 1; i<prefix.length; i++){
        if(prefix[i]==prefix.at(-1)-prefix[i]){
            return true;
        }
    }
    return false;
};