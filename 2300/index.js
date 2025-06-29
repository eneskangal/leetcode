let successfulPairs= function(spells, potions, success){
    let data= [];
    potions= potions.sort((a,b)=>{return a-b});   
    for(let i=0; i<spells.length; i++){
        let subCount= 0;
        let left= 0;
        let right= potions.length-1;
        let middle= Math.floor((left+right)/2);
        while(left<right){
            if(potions[middle]*spells[i]<success){                     
                if(potions[right]*spells[i]<success){                  
                    subCount= subCount==0 ? 0 : subCount;
                    left= right;
                }                
                else{
                    left= middle+1; 
                    if(potions[left]*spells[i]>=success){                    
                        subCount= potions.length-left;
                        left= right;
                    }                
                    else{
                        middle= Math.floor((left+right)/2);  
                    } 
                }                 
            }
            else{
                if(potions[left]*spells[i]>=success){
                    subCount= potions.length-left;
                    break;
                }               
                else{
                    subCount= potions.length-middle;
                    right= middle-1;
                    middle= Math.floor((left+right)/2);  
                }                 
            }            
        }
        if(subCount==0){
            if(potions[middle]*spells[i]<success){
                data.push(0);
            }
            else{
                data.push(potions.length-middle);
            }
        }
        else{
            data.push(subCount);
        }
    }
    return data;
};