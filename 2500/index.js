let deleteGreatestValue= function(grid){
    for(let i= 0; i<grid.length; i++){
        grid[i]= grid[i].sort((a,b)=>{
            return b-a;
        });
    }

    let sum= 0;
    for(let i= 0; i<grid[0].length; i++){
        let max= 0;
        for(let k= 0; k<grid.length; k++){
            if(grid[k][i]>max){
                max= grid[k][i];
            }
        }
        sum+= max;
    }   
    return sum;  
};