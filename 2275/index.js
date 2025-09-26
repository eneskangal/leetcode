let largestCombination= function(candidates){
    let hash= {};
    for(let i= 0; i<candidates.length; i++){
        for(let k= 0; k<32; k++){
            if(candidates[i]&2**k){
                if(hash[k]==undefined){
                    hash[k]= 1;
                }
                else{
                    hash[k]++;
                }
            }
        }
    } 

    let max= 0;
    for(let prop in hash){
        if(max<=hash[prop]){
            max= hash[prop];
        }
    } 

    return max;
};