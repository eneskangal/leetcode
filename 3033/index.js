let modifiedMatrix= function(matrix){
    let biggests= [];
    let matrixLength= matrix.length;
    let subMatrixLength= matrix[0].length;
    
    for(let i= 0; i<subMatrixLength; i++){
        let max;
        for(let k= 0; k<matrixLength; k++){
            if(k==0){
                max= matrix[k][i];
            }
            else if(max<matrix[k][i]){
                max= matrix[k][i];
            }
        }
        biggests.push(max);
    }

    let answers= [];
    for(let i= 0; i<matrixLength; i++){
        answers[i]= [];
        for(let k= 0; k<subMatrixLength; k++){
            if(-1==matrix[i][k]){
                answers[i][k]= biggests[k];
            }
            else{
                answers[i][k]= matrix[i][k];
            }
        }
    }
    return answers;     
};