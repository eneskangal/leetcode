let countBadPairs= function(nums){
    const n= nums.length;
    let totalPairs= (n * (n - 1)) / 2;
    const freq= new Map();
    let goodPairs= 0;
    for(let i = 0; i < n; i++){
        const key= nums[i]-i;
        if(freq.has(key)){
            goodPairs+= freq.get(key);
        }
        freq.set(key, (freq.get(key) || 0) + 1);
    }
    return totalPairs-goodPairs;
};