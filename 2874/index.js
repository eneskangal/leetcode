let maximumTripletValue= function(nums){
    const n= nums.length;

    const leftMax= new Array(n);
    const rightMax= new Array(n);


    leftMax[0]= nums[0];
    for(let i= 1; i<n; i++){
        leftMax[i]= Math.max(leftMax[i - 1], nums[i]);
    }

    rightMax[n - 1]= nums[n - 1];
    for(let i= n - 2; i >= 0; i--){
        rightMax[i]= Math.max(rightMax[i + 1], nums[i]);
    }

    let ans= 0;

    for(let j= 1; j < n - 1; j++){
        const value= (leftMax[j - 1] - nums[j]) * rightMax[j + 1];
        ans= Math.max(ans, value);
    }

    return ans;
};