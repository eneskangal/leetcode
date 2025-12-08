let colorTheArray= function(n, queries){
    let array= new Array(n).fill(0);
    let results= [];
    let colors= 0;
    for(let i= 0; i<queries.length; i++){
        if(array[queries[i][0]-1]==queries[i][1]){
            colors++;
        }
        if(array[queries[i][0]+1]==queries[i][1]){
            colors++;
        }
        if(true){
            if(array[queries[i][0]]!=0&&array[queries[i][0]-1]==array[queries[i][0]]){
                colors= Math.max(colors-1, 0);
            }
            if(array[queries[i][0]+1]!=0&&array[queries[i][0]+1]==array[queries[i][0]]){
                colors= Math.max(colors-1, 0);
            }                                   
        }
        results.push(colors)
        array[queries[i][0]]= queries[i][1];
    }
    return results;
};