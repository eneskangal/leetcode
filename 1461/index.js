let hasAllCodes= function(s, k){
    let hash= {};

    for(let i= 0; i<2**k; i++){
        hash[i>>>(0)]= i;        
    } 
    
    for(let i= 0; i<s.length-(k-1); i++){
        let have= parseInt(s.slice(i, i+k), 2);        
        if(hash[have]!=undefined){
            delete hash[have];
        }           
    }   

    for(let element in hash){
        return false;
    }
    return true;
};
