function getMaximumXor(nums, maximumBit){
    const maxVal= (1 << maximumBit) - 1;
    let xor= 0;
    const result= [];

    for(let num of nums){
        xor^= num;
    }

    for(let i = nums.length - 1; i>=0; i--){
        const k= xor^maxVal;
        result.push(k);
        xor^= nums[i]; 
    }
    return result;
}