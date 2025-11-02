let maximumStrongPairXor= function(nums){
    let max= -1;
    for(let i= 0; i<nums.length; i++){
        for(let k= i; k<nums.length; k++){
            if(Math.abs(nums[i]-nums[k])<=Math.min(nums[i], nums[k])){
                if(max<(nums[i]^nums[k])){
                    max= (nums[i]^nums[k]);
                }
            }        
        }        
    }    
    return max;
};