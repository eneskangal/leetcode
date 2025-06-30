/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum= 0;
    let numsLength= nums.length;
    for(let i=0; i<numsLength; i++){
        if(numsLength%(i+1)==0){
            sum+= nums[i]**2;
        }
    }
    return sum;
};