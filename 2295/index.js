let arrayChange= function(nums, operations){
    let hash= {};    
    for(let i= 0; i<nums.length; i++){
        hash[nums[i]]= i;
    }  

    for(let i= 0; i<operations.length; i++){
        let copy= hash[operations[i][0]];
        delete hash[operations[i][0]];
        hash[operations[i][1]]= copy;
    }

    let array= [];

    for(let prop in hash){
        array[hash[prop]]= prop*1;
    }

    return array;
};