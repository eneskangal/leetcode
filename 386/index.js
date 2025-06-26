let lexicalOrder= function(n){
    let obj= {};
    for(let i=1; i<n+1; i++){
        obj[i]= i;
    }
    return Object.values(obj).sort();    
};