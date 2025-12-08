let minimumLength= function(s){
    let hash= {};
    for(let i= 0; i<s.length; i++){
        if(hash[s[i]]==undefined){
            hash[s[i]]= 1;
        }
        else{
            if(hash[s[i]]==2){
                hash[s[i]]= 1;
            }
            else{
                hash[s[i]]+= 1;
            }
        }
    }    

    let count= 0;
    for(let prop in hash){
        count+= hash[prop];
    }

    return count;
};