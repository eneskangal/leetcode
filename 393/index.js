let validUtf8= function(data){
    let border;
    if(data.length==1){
        if(data[0].toString(2).padStart(8, '0').indexOf("0")==0){
            return true; 
        }
        return false;
    }
    for(let i= 0; i<data.length; i++){
        if(data[i]>247){
            return false;
        }
        if(border==undefined){       
            border= data[i].toString(2).padStart(8, '0').indexOf("0"); 
            if(border==0){
                border= undefined;
            }
            else if(border==1){
                return false;
            }
            else if(border>1){
                border--;
            }       
        }
        else{       
            if(border==0){
                border= data[i].toString(2).padStart(8, '0').indexOf("0"); 
                if(border==0){
                    border= undefined;
                }
                else if(border==1){
                    return false;
                }
                else if(border>1){
                    border--;
                }     
            } 
            else if(data[i].toString(2).padStart(8, '0').indexOf("10")==0){
                border--;                 
            }      
            else{                
                if(border>0){
                    return false;
                }                
            }                      
        }
    }
    return border>0 ? false : true;  
};