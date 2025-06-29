let maxSum= function(grid){    
    let sum= 0;
    for(let i= 0; i<grid.length-2; i++){
        for(let j= 0; j<grid[0].length-2; j++){
            subSum= 0;
            subSum+= grid[i][j]+grid[i][j+1]+grid[i][j+2];   
            subSum+= grid[i+1][j+1];
            subSum+= grid[i+2][j]+grid[i+2][j+1]+grid[i+2][j+2]; 
            if(subSum>sum){
                sum= subSum;
            }             
        }                
    }
    return sum;    
};