let asteroidCollision= function(asteroids){
    let i= 0;
    while(i<asteroids.length){
        if(asteroids[i]>=0){
            if(asteroids[i+1]>=0||asteroids[i+1]==undefined){
                i++;
            }
            else{
                if(asteroids[i]>Math.abs(asteroids[i+1])){
                    asteroids.splice(i+1, 1);
                    i+= 0;
                }
                else if(asteroids[i]==Math.abs(asteroids[i+1])){
                    asteroids.splice(i, 2);
                    i-= 1;
                }
                else if(asteroids[i]<Math.abs(asteroids[i+1])){
                    asteroids.splice(i, 1);
                    i--;
                }                  
            }
        }
        else{
            if(asteroids[i+1]<0){
                i++;
            }
            else{
                i++;                
            }            
        }
    }
    return asteroids;    
};