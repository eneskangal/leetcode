let equalPairs= function(grid){
    let count= 0;
    for(let i= 0; i<grid.length; i++){        
        for(let j= 0; j<grid.length; j++){ 
            let isFalse= false;            
            for(let z= 0; z<grid.length; z++){
                if(grid[i][z]!=grid[z][j]){
                    isFalse= true;
                    break;
                }                    
            }
            if(!isFalse){
                count++;
            }                  
        }        
    }
    return count;    
};