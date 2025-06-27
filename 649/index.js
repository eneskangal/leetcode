let predictPartyVictory= function(senate){
    senate= senate.split("");
    for(let i= 0; i<senate.length;){
        if(senate[i]=="R"){            
            let index= senate.indexOf("D",i+1);
            if(index==-1){
                let index2= senate.indexOf("D");   
                if(index2==-1){
                    return "Radiant";
                }
                else{        
                    senate.splice(index2, 1);                                                       
                    if(i==senate.length-1){                        
                        i+= 0;
                    }    
                    else if(i+1>=senate.length){                        
                        i= 0;
                    }                 
                    else{
                        i++;
                    }                      
                }             
            }
            else{
                senate.splice(index, 1);
                if(i+1>=senate.length){
                    i= 0;
                } 
                else{
                    i++;
                }
            }
        }
        else if(senate[i]=="D"){
            let index= senate.indexOf("R",i+1);
            if(index==-1){
                let index2= senate.indexOf("R");   
                if(index2==-1){
                    return "Dire";
                }
                else{
                    senate.splice(index2, 1);
                    if(i+1>=senate.length){
                        i= 0;
                    } 
                    else{
                        i++;
                    }                 
                }             
            }
            else{                
                senate.splice(index, 1);
                if(i+1>=senate.length){
                    i= 0;
                } 
                else{
                    i++;
                }                   
            }            
        }
    }
    if(senate[0]=="D"){
        return "Dire";
    }  
    else{
        return "Radiant";
    }  
};