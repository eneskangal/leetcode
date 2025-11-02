let addRungs= function(rungs, dist){
    let current= 0;
    let count= 0;
    for(let i= 0; i<rungs.length; i++){        
        if(rungs[i]-current<=dist){
            current= rungs[i];
        }
        else{
            if((rungs[i]-current)%dist==0){
                count+= Math.trunc(((rungs[i]-dist)-current)/dist);                
            }
            else{
                count+= Math.trunc((rungs[i]-current)/dist);             
            }
            current= rungs[i];
        }
    }  
    return count;  
};