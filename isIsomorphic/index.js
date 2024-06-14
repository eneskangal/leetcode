let isIsomorphic= function(s, t){
    const obj= {};
    const obj2= {};
    for(let i=0; i<s.length; i++){
        if(!obj[s[i]]){
             obj[s[i]]= t[i];           
        }
        else{
            if(obj[s[i]]!=t[i]){
                return false;
            }
        }
        if(!obj2[t[i]]){
             obj2[t[i]]= s[i];           
        }
        else{
            if(obj2[t[i]]!=s[i]){
                return false;
            }
        }
    }
    return true;    
};