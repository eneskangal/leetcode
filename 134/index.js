let canCompleteCircuit= function(gas, cost){
    let liquid= 0;
    let index= -1;
    for(let i= 0; i<gas.length;){
        liquid+= gas[i];
        if(liquid-cost[i]>=0){
            liquid-= cost[i];
            let c;
            if(i==gas.length-1){
                c= 0;
            } 
            else{
                c= i+1; 
            }
            while(c!=i){
                liquid+= gas[c];
                if(liquid-cost[c]>=0){
                    liquid-= cost[c];
                    if(c==gas.length-1){
                        c= 0;
                    } 
                    else{
                        c= c+1; 
                    }                 
                }
                else{
                    liquid= 0;                       
                    break;              
                }                              
            }
            if(c==i){
                return i;
            }
            else if(c!=i){
                if(c<i){
                    return -1;
                }
                else{
                    liquid= 0;  
                    i= c; 
                }
            }                               
        }
        else{
            liquid= 0;
            i++;
        }
    }
    return index;    
};