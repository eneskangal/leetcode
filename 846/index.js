let isNStraightHand= function(hand, groupSize){
    if(hand.length%groupSize!=0){
        return false;
    }
    else{
        let sorting= hand.sort((a,b)=>{
            return a-b;
        });
        let data= [];    
        for(let i=0; i<sorting.length; i++){      
            if(i==0){
                data.push([sorting[i]]);
            }
            else{
                for(let k=0; k<data.length; k++){   
                    if(data[k][data[k].length-1]+1==sorting[i]){                                           
                        if(groupSize>data[k].length){
                            data[k].push(sorting[i]); 
                            break;
                        }                        
                        else if(data.length-1==k){
                            data.push([sorting[i]]); 
                            break;                            
                        }                                         
                    }
                    else{                      
                        if(i==hand.length-1&&data.length-1==k&&groupSize>data[k].length){
                            return false;
                        }
                        else if(data.length-1==k){
                            data.push([sorting[i]]); 
                            break;                            
                        }            
                    }                                                        
                }
            }
        }
        for(let i= 0; i<data.length; i++){
            if(data[i].length!=groupSize){
                return false;
            }
        }
        return true;       
    }          
};