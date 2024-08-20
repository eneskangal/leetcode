let setZeroes= function(matrix){
    let obj=  {};
    for(let i=0; i<matrix.length; i++){
        for(let k= 0; k<matrix[i].length; k++){
            if(matrix[i][k]==0){
                obj[`${i}x${k}`]= `${i}x${k}`;
            }
        }
    } 
    for(const prop in obj){
        let row= prop.slice(0, prop.indexOf("x"));
        let col= prop.slice(prop.indexOf("x")+1);
        for(let i= 0; i<matrix[row].length; i++){
            matrix[row][i]= 0;
        }
        for(let k= 0; k<matrix.length; k++){
            matrix[k][col]= 0;
        }
    }
    return matrix;  
};