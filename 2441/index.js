/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums){
    const obj= {};
    const array= [];
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            if(nums[i]>0){
                array.push(nums[i]);
            }
            else{
                array.push(nums[i]*-1);
            }
        }
        else{
            obj[nums[i]*-1]= nums[i];
        }
    }
    return array.length==0 ? -1 : Math.max(...array);    
};