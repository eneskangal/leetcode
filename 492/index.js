let constructRectangle= function(area){
    if(area==1){
        return [1,1];
    }
    for(let i= area-1; i>0; i--){
        if(area%i==0){
            if(area/i>=i){
                return [area/i, i];
            }
        }
    }    
};