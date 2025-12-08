let numIslands= function(grid){
    let count= 0;
    function recursive(i, k){
        if(grid[i][k]=="1"){
            grid[i][k]= "0";
            if(grid[i][k+1]=="1"){
                recursive(i, k+1);                
            }
            if(grid[i-1]!=undefined&&grid[i-1][k]=="1"){
                recursive(i-1, k);                
            }
            if(grid[i+1]!=undefined&&grid[i+1][k]=="1"){
                recursive(i+1, k);                
            }
            if(grid[i][k-1]=="1"){
                recursive(i, k-1);                
            }
        }
    } 

    for(let i= 0; i<grid.length; i++){
        for(let k= 0; k<grid[i].length; k++){
            if(grid[i][k]=="1"){
                grid[i][k]= "0";
                if(grid[i][k+1]=="1"){
                    recursive(i, k+1);                
                }
                if(grid[i+1]&&grid[i+1][k]=="1"){
                    recursive(i+1, k);                
                }                
                count++;
            }
        }
    }   
    return count;
};