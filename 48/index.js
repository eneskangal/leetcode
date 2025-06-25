let rotate= function(matrix){
    let data= [];
    let row= matrix.length-1;
    for(let i= 0; i<matrix.length; i++){
        let subData= [];        
        for(let k= 0; k<matrix[i].length; k++){
            subData.push(matrix[k][row]);
        }  
        row--;  
        data.push(subData);  
    } 
    for(let i= 0; i<matrix.length; i++){       
        for(let k= 0; k<matrix[i].length; k++){
            matrix[i][k]= data[data.length-(i+1)][data[k].length-(k+1)]
        }   
    }         
};