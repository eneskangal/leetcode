let maxProfit= function(prices){
    let min, max, old;
    for(let i= 0; i<prices.length; i++){
        if(min==undefined){
            min= prices[i];
        }
        else{
            if(min>prices[i]){
                min= prices[i];
                max= undefined;
            }            
            else{
                if(max==undefined){
                    max= prices[i];        
                    if(!old){
                        old= max-min;                        
                    }
                    else if(old<max-min){
                        old= max-min;                        
                    }                                                                                
                }
                else if(max<prices[i]){
                    if(old==undefined){
                        old= prices[i]-min;                      
                    }
                    else if(old<prices[i]-min){
                        old= prices[i]-min;
                    }
                    max= prices[i];
                }
            }
        }
    }
    if(!old){
        return 0;
    }     
    if(max-min>old){
        return max-min;
    } 
    return old;     
};