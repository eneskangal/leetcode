let lemonadeChange= function(bills){
    let money= 0;
    let obj= {"5": 0, "10": 0, "20": 0};
    for(let i= 0; i<bills.length; i++){
        if(bills[i]==5){
            obj["5"]+= 1;
        }
        else{
            if(bills[i]==10){
                if(obj["5"]>0){
                    obj["10"]+= 1;
                    obj["5"]-= 1;
                }
                else{
                    return false;
                }
            }
            else{
                if(obj["5"]>0){
                    if(obj["10"]>0){
                        obj["10"]-= 1;
                        obj["5"]-= 1;    
                        obj["20"]+= 1;                     
                    }
                    else{
                        if(obj["5"]>2){
                            obj["5"]-= 3;    
                            obj["20"]+= 1; 
                        }
                        else{
                            return false;
                        }
                    }
                }
                else{
                    return false;
                }
            }            
        }
    }

    return true;    
};