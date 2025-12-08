let isValid= function(s){
    while(s.includes("abc")){
        s= s.replace("abc", "");
    }
    return s.length===0;
};