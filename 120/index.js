let minimumTotal= function(triangle){
    for(let i= triangle.length-1; i>0; i--){        
        let subArray= [];
        for(let k= 0; k<triangle[i].length; k++){
            if(k==0){
                subArray.push(triangle[i-1][k]+triangle[i][k]);                
            }
            else if(k==triangle[i].length-1){
                if(subArray[k-1]>triangle[i-1][k-1]+triangle[i][k]){
                    subArray[k-1]= triangle[i-1][k-1]+triangle[i][k];                     
                }                              
            }
            else{
                if(subArray[k-1]>triangle[i-1][k-1]+triangle[i][k]){
                    subArray[k-1]= triangle[i-1][k-1]+triangle[i][k];    
                    subArray.push(triangle[i-1][k]+triangle[i][k]);                   
                }
                else{
                    subArray.push(triangle[i-1][k]+triangle[i][k]); 
                }
            }
        }
        triangle[i-1]= [...subArray];              
    } 
    return triangle[0][0];    
};