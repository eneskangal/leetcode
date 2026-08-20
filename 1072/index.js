let maxEqualRowsAfterFlips= function(matrix){
    if(matrix[0][1]==undefined){
        return matrix.length;
    }
    let max= 1;
    let hash= {};
    for(let i= 0; i<matrix.length; i++){
        let original= "";
        let reverse= "";
        for(let k= 0; k<matrix[i].length; k++){
            original+= matrix[i][k];
            if(matrix[i][k]==1){
                reverse+= 0;
            }
            else{
                reverse+= 1;
            }   
        }     
        if(hash[original]!=undefined){
            max= Math.max(hash[original]["count"]+1, max);
            hash[original]["count"]++;
        }
        if(hash[reverse]!=undefined){
            max= Math.max(hash[reverse]["count"]+1, max);
            hash[reverse]["count"]++;
        }
        else if(hash[original]==undefined){
            hash[original]= {count: 1};
        }        
    } 
    return max;  
};