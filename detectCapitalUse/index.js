let detectCapitalUse= function(word){
    if(word.match(/[A-Z]+/g)==word){
        return true;
    }   
    else if(word.match(/[a-z]+/g)==word){
        return true;
    }
    else if(word.match(/[A-Z][a-z]+/g)==word){
        return true;
    }  
    return false;
};