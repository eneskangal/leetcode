let findMissingAndRepeatedValues= function(grid){
    let hash= {};
    for(let i= 0; i<grid.length**2; i++){
        hash[i+1]= 1;
    }   

    let results= [];

    for(let i= 0; i<grid.length; i++){
        for(let k= 0; k<grid[i].length; k++){
            if(hash[grid[i][k]]==undefined){
                results.push(grid[i][k]);
            }
            else{
                delete hash[grid[i][k]];
            }
        }        
    } 

    return [results[0], Object.keys(hash)[0]*1];
};