let subarraysDivByK= function(nums, k){
    let count= new Map();
    count.set(0, 1);

    let prefix= 0;
    let result= 0;
    
    for(let num of nums){
        prefix+= num;
        let mod= ((prefix % k) + k) % k;
        if(count.has(mod)){
            result+= count.get(mod);
        }
        
        count.set(mod, (count.get(mod) || 0) + 1);
    }    
    return result;
};
