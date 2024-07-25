let spiralOrder= function(matrix){
    let data= [];
    let col= 0;
    let row= 0;
    let status= "right";
    let katsayi= 1;
    let visit= 0;
    if(matrix.length==1){
        return matrix[0];
    }
    else if(matrix[0].length==1){
        return matrix.flat(1999);
    }
    else if(matrix.length==2){
        return [...matrix[0], ...matrix[1].reverse()];
    }
    while(visit!=matrix.length*matrix[0].length){
        visit++;
        if(status=="right"){                       
            if(col==matrix[0].length-katsayi){
                data.push(matrix[row][col]);
                status= "down";
                row+= 1;
            }
            else{
                data.push(matrix[row][col]);  
                col+= 1;             
            }            
        }
        else if(status=="down"){                   
            if(row==matrix.length-katsayi){
                data.push(matrix[row][col]);
                status= "left";
                col-= 1;
            }
            else{
                data.push(matrix[row][col]);
                row+= 1;             
            }            
        }
        else if(status=="left"){                    
            if(col==katsayi-1){
                data.push(matrix[row][col]);
                status= "up";
                row-= 1;
            }
            else{
                data.push(matrix[row][col]);
                col-= 1;           
            }            
        }
        else if(status=="up"){                    
            if(row==katsayi){
                data.push(matrix[row][col]);
                status= "right";
                col+= 1;
                katsayi++;
            }
            else{                
                data.push(matrix[row][col]); 
                row-= 1;           
            }            
        }         
    }
    return data;
};