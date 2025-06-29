let memLeak= function(memory1, memory2){
    for(let i= 1; i<2**31; i++){
        if(memory1==memory2){
            if(memory1<i){
                return [i, memory1, memory2];                            
            }
            else{
                memory1-= i;
            }
        }
        else if(memory1<memory2){
            if(memory2<i){
                return [i, memory1, memory2];                            
            }
            else{
                memory2-= i;
            }
        }
        else if(memory1>memory2){
            if(memory1<i){
                return [i, memory1, memory2];                            
            }
            else{
                memory1-= i;
            }
        }         
    }    
};