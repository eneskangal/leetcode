let trafficSignal= function(timer){
    if(timer==0){
        return "Green";
    }
    else if(timer==30){
        return "Orange";
    } 
    else if(timer>30&&timer<91){
        return "Red";
    }  
    return "Invalid";    
};