let queryString= function(s, n){
    for(let i= 1; i<=n; i++){
        let toBinary= i.toString(2);
        if(s.indexOf(toBinary)==-1){
            return false;
        }
    }
    return true;
};