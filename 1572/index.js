/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum= function(mat) {
    let num= 0;
    let length= mat.length-1;
    if(mat.length==1){
        return mat[0];
    }
    for(let i=0; i<mat.length; i++){        
        if(i!=length){            
            num+= mat[i][i]+mat[i][length];
        }
        else if(i==length){
            num+= mat[i][i];
        }                         
        length--;       
    }
    return num;
};