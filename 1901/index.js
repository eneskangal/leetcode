let findPeakGrid= function(mat){
    let row= 0;
    let col= 0;
    while(true){
        if(mat[row+1]&&mat[row+1][col]>mat[row][col]){
            row++;
        } 
        else if(mat[row-1]&&mat[row-1][col]>mat[row][col]){
            row--;
        }
        else if(mat[row][col-1]&&mat[row][col-1]>mat[row][col]){
            col--;
        } 
        else if(mat[row][col+1]&&mat[row][col+1]>mat[row][col]){
            col++;
        }
        else{
            return [row, col];                    
        }
    }    
};