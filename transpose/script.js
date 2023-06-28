let transpose= function(matrix){
    let data=[]
    for(let i=0; i<matrix[0].length; i++){
        let sıfır=0
        let data2=[]
        for(let c=0; c<matrix.length; c++){
            data2.push(matrix[sıfır][i])
            sıfır++
        }
        data.push(data2)
    }
    return data            
}
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))