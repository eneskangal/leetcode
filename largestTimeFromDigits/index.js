let largestTimeFromDigits= function(arr){     
    let copyArr= [...arr];
    for(let i=2; i>-1; i--){        
        let returnDeger= "";
        if(arr.indexOf(i)>-1){
            if(i==2){
                returnDeger+= i;
                arr.splice(arr.indexOf(i), 1);                
                for(let k=3; k>-1; k--){
                    if(arr.indexOf(k)>-1){
                        returnDeger+= k+":";
                        arr.splice(arr.indexOf(k), 1);                        
                        for(let j=5; j>-1; j--){
                            if(arr.indexOf(j)>-1){
                                returnDeger+= j;
                                arr.splice(arr.indexOf(j), 1);                                
                                for(let z=9; z>-1; z--){
                                    if(arr.indexOf(z)>-1){
                                        returnDeger+= z;
                                        arr.splice(arr.indexOf(z), 1);
                                        return returnDeger;
                                    }                                   
                                }
                            }                            
                        }                                        
                    }
                }
                arr= copyArr;
            }
            if(i==1){
                returnDeger+= i;
                arr.splice(arr.indexOf(i), 1);                 
                for(let k=9; k>-1; k--){
                    if(arr.indexOf(k)>-1){
                        returnDeger+= k+":";
                         arr.splice(arr.indexOf(k), 1);
                        for(let j=5; j>-1; j--){
                            if(arr.indexOf(j)>-1){
                                returnDeger+= j;
                                 arr.splice(arr.indexOf(j), 1);
                                for(let z=9; z>-1; z--){
                                    if(arr.indexOf(z)>-1){
                                        returnDeger+= z;
                                        arr.splice(arr.indexOf(z), 1);
                                        return returnDeger;
                                    }                                   
                                }
                            }                            
                        }                                        
                    }
                }
                arr= copyArr;                
            }
            if(i==0){
                returnDeger+= i;
                arr.splice(arr.indexOf(i), 1);                                                          
                for(let k=9; k>-1; k--){
                    if(arr.indexOf(k)>-1){
                        returnDeger+= k+":";
                        arr.splice(arr.indexOf(k), 1);                            
                        for(let j=5; j>-1; j--){
                            if(arr.indexOf(j)>-1){
                                returnDeger+= j;
                                arr.splice(arr.indexOf(j), 1);
                                for(let z=9; z>-1; z--){
                                    if(arr.indexOf(z)>-1){
                                        returnDeger+= z;
                                        arr.splice(arr.indexOf(z), 1); 
                                        return returnDeger;
                                    }                                   
                                }
                            }                            
                        }                                        
                    }
                }
            }                         
        }        
    }
    return "";      
};