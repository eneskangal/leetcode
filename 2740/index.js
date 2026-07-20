let findValueOfPartition= function(nums){
    let min= (2**31)-1;
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    for(let i= 0; i<nums.length-1; i++){
        min= Math.min(min, Math.abs(nums[i]-nums[i+1]));
    }    

    return min;
};