let searchMatrix= function(matrix, target){
    for(let i=0; i<matrix.length; i++){
        if(matrix[i].indexOf(target)>-1){
            return true
        }
    }
    return false
}
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))