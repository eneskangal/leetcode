let longestSubsequence= function(arr, difference){
    let obj= {};
    let maxes= [];
    for(let i= 0; i<arr.length; i++){
        if(difference>0){
            if(i==0){
                obj[arr[i]+difference]= maxes.length;
                maxes.push(1);
            }
            else{
                if(obj[arr[i]]!=undefined){
                    if(obj[arr[i]+difference]==undefined){                                                
                        obj[arr[i]+difference]= obj[arr[i]];  
                        maxes[obj[arr[i]]]+= 1;                                                            
                        delete obj[arr[i]];                        
                    }
                    else{
                        obj[arr[i]+difference]= obj[arr[i]];  
                        maxes[obj[arr[i]]]+= 1;   
                        delete obj[arr[i]];                                                                                                      
                    }                    
                }
                else{       
                    if(obj[arr[i]+difference]==undefined){              
                        obj[arr[i]+difference]= maxes.length;
                        maxes.push(1); 
                    }                 
                }
            }                     
        }
        else if(difference==0){
            if(i==0){
                obj[arr[i]]= maxes.length;
                maxes.push(1);
            }
            else{              
                if(obj[arr[i]]!=undefined){  
                    maxes[obj[arr[i]]]+= 1;                                                                                                                          
                }
                else{
                    obj[arr[i]]= maxes.length;
                    maxes.push(1);                    
                }
            }                     
        }
        else{            
            if(i==0){
                obj[arr[i]+difference]= maxes.length;
                maxes.push(1);
            }
            else{             
                if(obj[arr[i]]!=undefined){
                    if(obj[arr[i]+difference]==undefined){                                                
                        obj[arr[i]+difference]= obj[arr[i]];  
                        maxes[obj[arr[i]]]+= 1;                                                            
                        delete obj[arr[i]];                        
                    }
                    else{
                        obj[arr[i]+difference]= obj[arr[i]];  
                        maxes[obj[arr[i]]]+= 1;   
                        delete obj[arr[i]];                                                                                                      
                    }                    
                }
                else{       
                    if(obj[arr[i]+difference]==undefined){              
                        obj[arr[i]+difference]= maxes.length;
                        maxes.push(1); 
                    }                
                }                
            }                        
        }        
    } 
    return Math.max(...maxes);
};