let getEncryptedString= function(s, k){
    s= s.split("");
    let string= "";
    let sLength= s.length;

    for(let i= 0; i<sLength; i++){
        if(i+k<sLength){
            string+= s[i+k];
        }
        else{
            string+= s[(i+k)%sLength];            
        }
    }  
    return string;  
};