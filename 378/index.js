let kthSmallest= function(matrix, k){
    let data= [];
    for(let i= 0; i<matrix.length; i++){
        for(let k= 0; k<matrix.length; k++){
            data.push(matrix[i][k]);                
        }
    } 
    data= data.sort((a,b)=>{
        return a-b;
    });    
    return data[k-1];       
};