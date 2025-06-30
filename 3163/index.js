let compressedString= function(word){
    let obj= {};
    let returnString= "";
    for(let i= 0; i<word.length; i++){
        if(obj[word[i]]==undefined){
            if(word[i]==word[i+1]){
                obj[word[i]]= 1;
            }
            else{
                returnString+= 1+word[i];
                obj= {};
            }
        }
        else if(obj[word[i]]<9){
            if(word[i]==word[i+1]){
                obj[word[i]]+= 1;
            }
            else{
                returnString+= obj[word[i]]+1+word[i];
                obj= {};
            }
        }
        else{
            returnString+= 9+word[i];
            obj= {};
            i= i-1;
        }
    } 
    return returnString;
};