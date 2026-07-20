let maxSum= function(nums){
    let hash= {};
    let sum= 0;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]>0){
            if(hash[nums[i]]==undefined){
                hash[nums[i]]= true;
                sum+= nums[i];
            }
        }
    } 

    return sum==0 ? Math.max(...nums) : sum;   
};