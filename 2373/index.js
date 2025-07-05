let largestLocal= function(grid){
    let rowLength= grid.length;
    let colLength= grid[0].length;
    let array= new Array(rowLength-2);

    for(let i= 0; i<rowLength-2; i++){
        array[i]= [];
        for(let k= 0; k<colLength-2; k++){
            let max= -1;
            for(j= i; j<i+3; j++){
                for(l= k; l<k+3; l++){
                    if(max<grid[j][l]){
                        max= grid[j][l];
                    }              
                }                
            }
            array[i][k]= max;        
        }        
    }  
    return array;  
};