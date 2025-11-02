let maximumTotalSum= function(maximumHeight){
    maximumHeight= maximumHeight.sort((a,b)=>{
        return b-a;
    });

    let previousHeight= 1000000001;
    for(let i= 0; i<maximumHeight.length; i++){
        previousHeight= Math.min(maximumHeight[i], previousHeight-1);
        maximumHeight[i]= previousHeight;       
    }

    let sum= 0;
    for(let i= 0; i<maximumHeight.length; i++){
        if(maximumHeight[i]>0){
            sum+= maximumHeight[i];
        }
        else{
            return -1;
        }
    }

    return sum;
};