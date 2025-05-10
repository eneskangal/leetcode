let twoEggDrop= function(n){
    for(let i= 1; i<n+1; i++){
        if(n<=(i*(i+1))/2){
            return i;
        }    
    }    
};