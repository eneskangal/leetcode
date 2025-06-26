let maxRotateFunction= function(nums){
    let addofNumbers= 0;
    let generalSum= 0;
    let returnSum= -(2**31);
    for(let i= 0; i<nums.length; i++){
        addofNumbers+= nums[i];
        generalSum+= nums[i]*i; 
    } 
    if(returnSum<generalSum){
        returnSum= generalSum;
    }
    for(let i= 1; i<nums.length; i++){
        generalSum+= addofNumbers-nums[nums.length-i]; 
        generalSum-= nums[nums.length-i]*(nums.length-1); 
        if(returnSum<generalSum){
            returnSum= generalSum;
        }
    }   
    return returnSum;
};