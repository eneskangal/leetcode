let sortSentence= function(s) {    
    const splitString= s.split(" ");
    const array= Array(splitString.length);    
    for(let i=0; i<splitString.length; i++){
        let index= splitString[i].match(/[0-9]+/);  
        array[index[0]-1]= splitString[i].match(/[A-Z|a-z]+/)[0]; 
    }
    return array.join(" ");
};