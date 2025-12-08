let maximizeExpressionOfThree= function(nums){
    nums= nums.sort((a,b)=>{
        return b-a;
    });

    return nums[0]+nums[1]-(nums.at(-1));
};