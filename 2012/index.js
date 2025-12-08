let sumOfBeauties= function(nums){
    const n= nums.length;

    const leftMax= Array(n).fill(0);
    leftMax[0]= -Infinity;

    for(let i= 1; i<n; i++){
        leftMax[i]= Math.max(leftMax[i-1], nums[i-1]);
    }

    const rightMin= Array(n).fill(0);
    rightMin[n-1]= Infinity;

    for(let i= n-2; i>=0; i--){
        rightMin[i]= Math.min(rightMin[i+1], nums[i+1]);
    }

    let totalBeauty= 0;

    for(let i= 1; i<n-1; i++){
        if(leftMax[i]<nums[i]&&nums[i]<rightMin[i]){
            totalBeauty+= 2;
        }
        else if(nums[i-1]<nums[i]&&nums[i]<nums[i+1]){
            totalBeauty+= 1;
        }
    }
    return totalBeauty;
};