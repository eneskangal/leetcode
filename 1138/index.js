let alphabetBoardPath= function(target){
    let obj= {
        "a": "0x0",
        "b": "0x1",
        "c": "0x2",
        "d": "0x3",
        "e": "0x4",
        "f": "1x0",
        "g": "1x1",
        "h": "1x2",
        "i": "1x3",
        "j": "1x4",
        "k": "2x0",
        "l": "2x1",
        "m": "2x2",
        "n": "2x3",
        "o": "2x4",
        "p": "3x0",
        "q": "3x1",
        "r": "3x2",
        "s": "3x3",
        "t": "3x4",
        "u": "4x0",
        "v": "4x1",
        "w": "4x2",
        "x": "4x3",
        "y": "4x4",
        "z": "5x0"
    };
    
    let current= "0x0";
    let string= "";
    for(let i= 0; i<target.length; i++){
        if(current==obj[target[i]]){
            string+= "!";
        }
        else{
            let diff= obj[target[i]][0]-current[0];
            let diff2= obj[target[i]][2]-current[2];
            if(diff<diff2){
                if(diff<0){
                    string+= "U".repeat(current[0]-obj[target[i]][0]);  
                    if(obj[target[i]][2]>current[2]){
                        string+= "R".repeat(obj[target[i]][2]-current[2])+"!";
                        current= obj[target[i]];  
                    }
                    else{
                        string+= "L".repeat(current[2]-obj[target[i]][2])+"!";   
                        current= obj[target[i]];                 
                    }                  
                }
                else{
                    string+= "D".repeat(obj[target[i]][0]-current[0]);  
                    if(obj[target[i]][2]>current[2]){
                        string+= "R".repeat(obj[target[i]][2]-current[2])+"!";
                        current= obj[target[i]];  
                    }
                    else{
                        string+= "L".repeat(current[2]-obj[target[i]][2])+"!";   
                        current= obj[target[i]];                 
                    }
                }
            }
            else{
                if(diff2<0){
                    string+= "L".repeat(current[2]-obj[target[i]][2]);  
                    if(obj[target[i]][0]>current[0]){
                        string+= "D".repeat(obj[target[i]][0]-current[0])+"!";
                        current= obj[target[i]];  
                    }
                    else{
                        string+= "U".repeat(current[0]-obj[target[i]][0])+"!";   
                        current= obj[target[i]];                 
                    }                  
                }
                else{
                    string+= "R".repeat(obj[target[i]][2]-current[2]);  
                    if(obj[target[i]][0]>current[0]){
                        string+= "D".repeat(obj[target[i]][0]-current[0])+"!";
                        current= obj[target[i]];  
                    }
                    else{
                        string+= "U".repeat(current[0]-obj[target[i]][0])+"!";   
                        current= obj[target[i]];                 
                    }
                }
            }
        }
    }
    return string;
};