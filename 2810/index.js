let finalString= function(s){
    while(s.indexOf("i")!=-1){
        const index= s.indexOf("i"); 
        s= s.slice(0, index).split("").reverse().join("")+s.slice(index+1, s.length);
    }
    return s;
}