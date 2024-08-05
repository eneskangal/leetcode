let firstMissingPositive= function(nums){
    let min= 1;
    nums= nums.sort((a,b)=>{return a-b});
    for(let i=0; i<nums.length; i++){
        if(min==nums[i]){
            min+= 1;
        }
    } 
    return min;   
};