let minDifference= function(nums){
    if(nums[3]==undefined){
        return 0;
    }
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    let diff= nums.at(-4)-nums[0];   
    let diff2= nums.at(-3)-nums[1]; 
    let diff3= nums.at(-2)-nums[2];   
    let diff4= nums.at(-1)-nums[3]; 
    return Math.min(diff, diff2, diff3, diff4);
};