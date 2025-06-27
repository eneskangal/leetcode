let removeOuterParentheses= function(s){
    let current= 0;
    let string= "";
    for(let i=0; i<s.length; i++){
        if(s[i]=="("){
            if(current>0){
                string+= s[i];
            }
            current++;
        }
        if(s[i]==")"){
            if(current>1){
                string+= s[i];
            }
            current--;
        }
    } 
    return string;   
};