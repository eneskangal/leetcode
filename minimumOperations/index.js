let minimumOperations= function(nums){
    let process= 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%3!=0){
            process++;
        }
    } 
    return process;
};