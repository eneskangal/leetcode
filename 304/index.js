let NumMatrix= function(matrix){
    this.array= [];
    for(let i=0; i<matrix.length; i++){
        for(let k=0; k<matrix[i].length; k++){
            if(this.array[i]==undefined){
                this.array[i]= [];
                this.array[i][k]= matrix[i][k];
            } 
            else{
                this.array[i][k]= this.array[i][k-1]+matrix[i][k];
            }    
        }        
    }
};

NumMatrix.prototype.sumRegion= function(row1, col1, row2, col2){
    let count= 0;
    for(let i= row1; i<=row2; i++){
        if(col1==0&&col2==0){
            count+= this.array[i][col1];   
        }
        else{
            if(col1==0){
                count+= this.array[i][col2];   
            }
            else{
                count+= this.array[i][col2]- this.array[i][col1-1];   
            }
        }            
    }
    return count;    
};