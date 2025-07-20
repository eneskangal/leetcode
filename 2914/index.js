let minChanges= function(s){
    let count= 0;
    for(let i= 0; i<s.length; i+=2){
        let binary= parseInt(s.slice(i, i+2),2);
        if(binary!=3&&binary!=0){
            count++;
        }
    }    
    return count;
};