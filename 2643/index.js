let rowAndMaximumOnes= function(mat){
    let max= 0;
    let data= [];
    for(let i=0; i<mat.length; i++){
        let subCount= 0;
        for(let k=0; k<mat[i].length; k++){
            if(mat[i][k]==1){
                subCount++;
            }
        }        
        if(subCount>max){
            data[0]= i;
            data[1]= subCount;
            max= subCount;
        }
        else if(subCount==0&&max==0){
            if(data[0]==undefined){
                data[0]= i; 
                data[1]= subCount;  
            }         
        }
    }
    return data;
};