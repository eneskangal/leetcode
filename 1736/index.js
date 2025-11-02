let maximumTime= function(time){
    time= time.split("");
    if(time[0]=="?"){
        if(time[1]=="?"){
            time[0]= 2;
            time[1]= 3;
        }
        else if(time[1]<4){
            time[0]= 2;
        }
        else{
            time[0]= 1;
        }
    }
    else{
        if(time[1]=="?"){
            if(time[0]==2){
                time[1]= 3;
            }
            else{
                time[1]= 9;
            }
        }        
    }
    if(time[3]=="?"){
        if(time[4]=="?"){
            time[3]= 5;
            time[4]= 9;
        }
        else{
            time[3]= 5;
        }
    } 
    else{
        if(time[4]=="?"){
            time[4]= 9;
        }       
    }

    return time.join("");   
};