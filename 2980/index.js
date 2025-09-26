let hasTrailingZeros= function(nums){
    for(let i= 0; i<nums.length; i++){
        for(let k= i+1; k<nums.length; k++){
            if(nums[i]%2==0&&nums[k]%2==0){
                return true;
            }            
        }
    } 

    return false;   
};