let sortArrayByParity= function(nums){
    let returnArray= [];
    for(let i=0; i<nums.length; i++){
        nums[i]%2==0 ? returnArray.unshift(nums[i]) : returnArray.push(nums[i]);
    }
    return returnArray;
};