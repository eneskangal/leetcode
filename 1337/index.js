let kWeakestRows= function(mat, k){
    let results= [];
    for(let i= 0; i<mat.length; i++){
        let count= 0;
        for(let k= 0; k<mat[i].length; k++){
            if(mat[i][k]==1){
                count++;
            }        
        }  
        results.push({index: i, count: count});   
    }

    let sortedResults= results.sort((a,b)=>{
        return a.count-b.count;
    });

    let array= [];
    for(let i= 0; i<k; i++){
        array.push(sortedResults[i]["index"]);
    }

    return array;
};