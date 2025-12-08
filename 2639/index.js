let findColumnWidth= function(grid){
    let hash= {};
    function calc(number){
        let convert= number+"";
        return convert.length;
    }

    for(let i= 0; i<grid.length; i++){
        for(let k= 0; k<grid[i].length; k++){
            let result= calc(grid[i][k]);
            if(hash[k]==undefined){
                hash[k]= {max: result};
            }
            else{
                if(hash[k]["max"]<result){
                    hash[k]= {max: result};                    
                }
            }
        }
    }    

    let results= [];
    for(let prop in hash){
        results.push(hash[prop]["max"]*1);
    }
    return results;
};