let checkTwoChessboards= function(coordinate1, coordinate2){
    if("aceg".includes(coordinate1[0])){
        if("aceg".includes(coordinate2[0])){
            if(coordinate1[1]%2==coordinate2[1]%2){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            if(coordinate2[1]%2!=coordinate1[1]%2){
                return true;
            }
            else{
                return false;
            }
        }       
    }
    else{
        if("aceg".includes(coordinate2[0])){
            if(coordinate1[1]%2!=coordinate2[1]%2){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            if(coordinate2[1]%2==coordinate1[1]%2){
                return true;
            }
            else{
                return false;
            }
        }         
    }    
};