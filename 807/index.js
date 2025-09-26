let maxIncreaseKeepingSkyline= function(grid){
    let count= 0;
    let rows= {};
    let cols= {};
    
    for(let i= 0; i<grid.length; i++){
        let rowMax= -1;
        let colMax= -1;
        for(let k= 0; k<grid[i].length; k++){
            if(grid[i][k]>rowMax){
                rowMax= grid[i][k];
            }
            if(grid[k][i]>colMax){
                if(cols[i]==undefined){
                    colMax= grid[k][i];
                    cols[i]= {["max"]: colMax};
                }
                else{
                    colMax= grid[k][i];
                    cols[i]["max"]= colMax;                    
                }
            }
        }
        rows[i]= {["max"]: rowMax};
    }    

    for(let i= 0; i<grid.length; i++){
        for(let k= 0; k<grid[i].length; k++){
            let min= Math.min(rows[i]["max"], cols[k]["max"]);
            count+= min-grid[i][k];            
        }
    }

    return count;
};