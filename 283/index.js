/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let copyNums= [...nums];
    let index= 0;
    let lastIndex= nums.length-1;
    for(let i=0; i<nums.length; i++){
        if(copyNums[i]>0||copyNums[i]<0){
            nums[index]= copyNums[i];
            index++;
        }
        else{
            nums[lastIndex]= 0;
            lastIndex--;
        }
    }
    return nums;
};