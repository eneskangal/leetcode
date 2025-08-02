let isMonotonic= function(nums){
    if(nums[0]==undefined){
        return true;
    }
    
    if(nums[0]<nums[1]){
        for(let i=1; i<nums.length; i++){
            if(nums[i-1]>nums[i]){
                return false;
            }
        }  
        return true;      
    }   

    if(nums[0]>nums[1]){
        for(let i=1; i<nums.length; i++){
            if(nums[i-1]<nums[i]){
                return false;
            }
        }  
        return true;      
    } 

    return isMonotonic(nums.slice(1));
};