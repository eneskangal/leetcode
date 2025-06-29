function subsetXORSum(nums){
    const n= nums.length;
    let totalSum= 0;
    for(let mask= 0; mask<(1<<n); mask++){
        let xorSum= 0;
        for(let i = 0; i<n; i++){
            if((mask>>i)&1){
                xorSum^= nums[i];
            }
        }
        totalSum+= xorSum;
    }
    return totalSum;
}