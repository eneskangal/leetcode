let reorderedPowerOf2= function(n){    
    n+= "";
    for(let i= 0; i<31; i++){
        reordered= 2**i+""; 
        if(reordered==n){
            return true;
        }
        else if(reordered.length==n.length){
            let copyN= n;            
            for(let k= 0; k<reordered.length; k++){
                n= n.replace(reordered[k], "");                
            }            
            if(n.length==0){
                return true;
            } 
            n= copyN;                                                                        
        }
        else if(reordered.length>n.length){
            return false;
        }  
    }
    return false;    
};