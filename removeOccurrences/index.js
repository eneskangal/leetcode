let removeOccurrences= function(s, part){
    while(s.indexOf(part)>-1){
        s= s.replace(part, "");
    } 
    return s;   
};