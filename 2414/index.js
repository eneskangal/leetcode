let longestContinuousSubstring= function(s){
    let string= 1;
    let subString= 1;
    for(let i= 1; i<s.length; i++){
        if(s[i].charCodeAt()-s[i-1].charCodeAt()==1){
            subString++;
        }
        else{
            if(string<subString){
                string= subString;
            }
            subString= 1;
        }
    }

    return string>subString ? string : subString;    
};