const getSumAbsoluteDifferences = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(0);
    const prefixSum = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        const leftSum = i * nums[i] - prefixSum[i];
        const rightSum = (prefixSum[n] - prefixSum[i + 1]) - (n - i - 1) * nums[i];
        result[i] = leftSum + rightSum;
    }
    
    return result;
};