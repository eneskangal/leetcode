let maxAdjacentDistance= function(nums){
    nums.push(nums[0]);
    
    let max= -1000;
    for(let i= 0; i<nums.length-1; i++){
        if(max<Math.abs(nums[i]-nums[i+1])){
            max=  Math.abs(nums[i]-nums[i+1]);
        }
    }

    return max;
};