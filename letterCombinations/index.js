let letterCombinations= function(digits){
    let data= [];
    const phoneNumbers= {
        "2": ["a", "b","c"],
        "3": ["d","e", "f"],
        "4": ["g","h", "i"],
        "5": ["j","k", "l"],
        "6": ["m","n", "o"],
        "7": ["p","q", "r", "s"],
        "8": ["t","u", "v"],
        "9": ["w","x", "y", "z"]
    };  

    if(digits.length==1){
        return phoneNumbers[digits[0]];
    }

    else if(digits.length==0){
        return data;
    }

    for(let i= 0; i<phoneNumbers[digits[0]].length;){          
        if(digits.length==2){
            for(let k= 0; k<phoneNumbers[digits[1]].length; k++){
                data.push(phoneNumbers[digits[0]][i]);
                data[data.length-1]+= phoneNumbers[digits[1]][k];                                 
            }
            i++; 
        } 
        else{            
            if(digits.length==3){
                for(let k= 0; k<phoneNumbers[digits[1]].length; k++){ 
                    for(let j= 0; j<phoneNumbers[digits[2]].length; j++){
                        data.push(phoneNumbers[digits[0]][i]);     
                        data[data.length-1]+= phoneNumbers[digits[1]][k];           
                        data[data.length-1]+= phoneNumbers[digits[2]][j];             
                    }                          
                }
                i++; 
            }
            else if(digits.length==4){
                for(let k= 0; k<phoneNumbers[digits[1]].length; k++){ 
                    for(let j= 0; j<phoneNumbers[digits[2]].length; j++){
                        for(let l= 0; l<phoneNumbers[digits[3]].length; l++){ 
                            data.push(phoneNumbers[digits[0]][i]);       
                            data[data.length-1]+= phoneNumbers[digits[1]][k];           
                            data[data.length-1]+= phoneNumbers[digits[2]][j];   
                            data[data.length-1]+= phoneNumbers[digits[3]][l];                                        
                        }                                           
                    }                                             
                }
                i++; 
            }
        }           
    }
    return data;
};