let occurrencesOfElement= function(nums, queries, x){
    let hash= {};
    let results= [];
    for(let i= 0; i<nums.length; i++){
        if(hash[x]==undefined&&nums[i]==x){
            hash[x]= {indexes: [i]};
        }
        else if(hash[x]!=undefined&&nums[i]==x){
            hash[x]["indexes"].push(i);
        }
    }

    for(let i= 0; i<queries.length; i++){
        if(hash[x]==undefined){
            results.push(-1);
        }
        else if(hash[x]["indexes"][queries[i]-1]==undefined){
            results.push(-1);
        }
        else{
            results.push(hash[x]["indexes"][queries[i]-1]);            
        }
    }    
    return results;
};