let numberOfSpecialChars= function(word){
    let smalls= {};
    let biggers= {};
    for(let i= 0; i<word.length; i++){
        let code= word[i].charCodeAt(); 
        if(code<123&&code>96){
            let big= word[i].toUpperCase(); 
            if(biggers[big]==undefined){
                smalls[word[i]]= true;
            }
            else{            
                delete smalls[word[i]];
            }
        }
        else if(code<91&&code>64){
            biggers[word[i]]= true;                          
        }
    }    
    
    let count= 0;
    for(let prop in smalls){
        let big= prop.toUpperCase();     
        if(biggers[big]){
            count++;
        }    
    }

    return count;
};