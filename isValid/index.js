let isValid= function(word){
    if(word.length<3){
        return false;
    }
    else{
        if(word.match(/\W/)){           
            return false;
        }
        if(!word.match(/[aeiou|AEIOU]/)){
            return false;
        }
        if(!word.match(/[^aeiou|AEIOU|0-9]/)){
            return false;
        }            
    }
    return true;
};