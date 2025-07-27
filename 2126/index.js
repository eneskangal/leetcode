let asteroidsDestroyed= function(mass, asteroids){
    asteroids= asteroids.sort((a,b)=>{
        return a-b;
    });

    for(let i= 0; i<asteroids.length; i++){
        if(mass<asteroids[i]){
            return false;
        }
        else{
            mass+= asteroids[i];
        }
    }  
    return true;  
};