let minOperations= function(nums, k){
    let xorSum= 0;
    for(let num of nums){
        xorSum^= num;
    }

    let diff= xorSum^k;

    let operations= 0;
    while(diff>0){
        operations+= diff&1;
        diff>>= 1;
    }
    return operations;
};