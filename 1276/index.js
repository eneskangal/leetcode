let numOfBurgers= function(tomatoSlices, cheeseSlices){
    let startJumbo= cheeseSlices;
    let startSmall= 0;
    while(startJumbo>-1){
        if((startSmall*2)+(startJumbo*4)==tomatoSlices){
            return [startJumbo, startSmall];
        }        
        else{
            startSmall+= 1;
            startJumbo-= 1;
        }
    }
    return [];     
};