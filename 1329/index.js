let diagonalSort= function(mat){
    for(let i= 0; i<mat[0].length-1; i++){
        let row= mat.length-1;
        let col= i;
        let array= [];
        while(row>-1&&col>-1){                 
            array.push(mat[row][col]);
            row--;
            col--;
        }

        array.sort((a,b)=>{
            return a-b;
        });
        row= mat.length-1;
        col= i;        
        let index= 0;

        while(row>-1&&col>-1){    
            mat[row][col]= array.pop();
            row--;
            col--;
            index++;            
        }                   
    }    
    for(let i= mat.length-1; i>-1; i--){
        let row= i;
        let col= mat[i].length-1;
        let array= [];

        while(row>-1&&col>-1){            
            array.push(mat[row][col]);
            row--;
            col--;
        }

        array.sort((a,b)=>{
            return a-b;
        });
        row= i;
        col= mat[i].length-1;
                
        while(row>-1&&col>-1){    
            mat[row][col]= array.pop();
            row--;
            col--;          
        }            
    }
    return mat;    
};