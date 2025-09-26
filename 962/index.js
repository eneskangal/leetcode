let maxWidthRamp= function(nums){
    const stack= [];

    for(let i = 0; i < nums.length; i++){
        if(stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]){
            stack.push(i);
        }
    }
     let maxWidth= 0;

    for(let j= nums.length - 1; j>=0; j--){
        while(stack.length>0&&nums[j]>=nums[stack[stack.length - 1]]){
            const i= stack.pop();
            maxWidth= Math.max(maxWidth, j - i);
        }
    }

    return maxWidth;
};