let xorQueries= function(arr, queries){
    let prefixes= [];
    for(let i= 0; i<arr.length; i++){
        if(prefixes[0]==undefined){
            prefixes[i]= arr[i];
        }
        else{
            prefixes[i]= prefixes[i-1]^arr[i];
        }                      
    }  
    let results= [];
    for(let i= 0; i<queries.length; i++){
        if(queries[i][0]==0){
            results.push(prefixes[queries[i][1]]);
        }
        else if(queries[i][0]==queries[i][1]){
            results.push(arr[queries[i][0]]);
        }
        else{
            results.push(prefixes[queries[i][1]]^prefixes[queries[i][0]-1]);
        }
    }
    return results;
};