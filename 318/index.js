let maxProduct= function(words){
    let length= 0;
    function encode(string){
        let code= new Array(26).fill(0);
        for(let i= 0; i<string.length; i++){
            code[string.charCodeAt(i)-97]= "1";
        }
        return parseInt(code.join(""), 2);
    }
    for(let i= 0; i<words.length; i++){
        for(let k= i+1; k<words.length; k++){
            if((encode(words[i])&encode(words[k]))==0){
                if(length<words[i].length*words[k].length){
                    length= words[i].length*+words[k].length; 
                }
            }
        }        
    }

    return length;    
};