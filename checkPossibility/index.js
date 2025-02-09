let checkPossibility= function(nums){
    let isFirst= false;
    for(let i= 0; i<nums.length-1; i++){
        if(nums[i]>nums[i+1]){
            if(!isFirst){
                isFirst= true;
                if (i>0&&nums[i - 1]>nums[i + 1]){
                    nums[i + 1]= nums[i];
                } 
                else{
                    nums[i]= nums[i + 1];
                }
            }
            else{
                return false;
            }       
        }        
    }
    return true;   
};