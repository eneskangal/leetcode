let sortMatrix= function(mat){
    for(let i= 0; i<mat[0].length; i++){
        let row= mat[0].length-1-i;
        let col= 0;
        let array= [];
        while(row<mat.length){             
            array.push(mat[row][col]);
            row++;
            col++;
        }
        array.sort((a,b)=>{
            return a-b;
        });
        row= mat[0].length-1-i;
        col= 0;
        while(row<mat.length){ 
            mat[row][col]= array.pop();
            row++;
            col++;          
        }                   
    }    
    for(let i= 1; i<mat[0].length; i++){
        let row= 0;
        let col= i;
        let array= [];
        while(col<mat[0].length){ 
            array.push(mat[row][col]);
            row++;
            col++;
        }
        array.sort((a,b)=>{
            return b-a;
        });
        row= 0;
        col= i;
        while(col<mat[0].length){    
            mat[row][col]= array.pop();
            row++;
            col++;          
        }            
    }
    return mat;    
};