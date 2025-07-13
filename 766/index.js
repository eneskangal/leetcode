let isToeplitzMatrix= function(matrix){
    if(matrix[0].length==1){
        return true;
    }
    let matrixLength= matrix.length;
    let matrixSubLength= matrix[0].length;
    for(let i= 0; i<matrixSubLength-1; i++){
        let row= 0;
        let col= i;
        let number= matrix[0][i];
        while(row<matrixLength&&col<matrixSubLength){
            if(number==matrix[row][col]){
                row++;
                col++
            }
            else{
                return false;
            }
        }
    }

    for(let i= 1; i<matrixLength; i++){
        let row= i;
        let col= 0;
        let number= matrix[row][0];
        while(row<matrixLength&&col<matrixSubLength){
            if(number==matrix[row][col]){
                row++;
                col++
            }
            else{
                return false;
            }
        }
    }
    return true;   
};