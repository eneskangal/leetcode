let trimTrailingVowels= function(s){
    let newS= "";
    let isIn= false;
    
    for(let i= s.length-1; i>-1; i--){
        if("aeiou".includes(s[i])&&isIn==false){            
        }
        else{
            newS= s[i]+newS; 
            isIn= true;
        }
    }

    return newS;
};