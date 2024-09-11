let removeStars= function(s){
    let str= "";
    for(let i=0; i<s.length; i++){
        if(s[i]=="*"){
            str= str.slice(0, str.length-1);
        }
        else{
            str+= s[i];
        }
    }    
    return str;  
};