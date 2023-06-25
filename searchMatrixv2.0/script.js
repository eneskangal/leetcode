let searchMatrix= function(matrix, target){
    let boolean=false
    for(let i=0; i<matrix.length; i++){
        for(let c=0; c<matrix[i].length; c++){
            if(matrix[i][c]==target){                               
                boolean=true
                break
            }
        }
    }
    return boolean   
}
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5))