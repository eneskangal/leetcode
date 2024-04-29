let scoreOfString= function(s){
    let returnValue= 0;
    for(let i=0; i<s.length-1; i++){
        returnValue+= Math.abs(s[i].charCodeAt()-s[i+1].charCodeAt());
    }
    return returnValue;
};

let scoreOfString("enes");