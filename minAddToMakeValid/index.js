let minAddToMakeValid= function(s){
    let openLength= 0;
    let closesLength= 0;
    for(let i= 0; i<s.length; i++){
        if(s[i]=="("){
            openLength+= 1;
        }
        else{
            if(openLength==0){
                closesLength+= 1;
            }
            else{
                openLength-= 1;
            }
        }
    }    
    return openLength+closesLength;
};