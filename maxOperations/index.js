let maxOperations= function(nums, k){
    let obj= {};    
    let count= 0;
    for(let i=0; i<nums.length; i++){        
        if(obj[nums[i]]==undefined&&k>nums[i]){
            if(obj[k-nums[i]]>=1){
                obj[k-nums[i]]+= 1;
            }
            else{
                obj[k-nums[i]]= 1;
            }
        }
        else if(obj[nums[i]]!=undefined&&k>nums[i]){
            if(obj[nums[i]]==1){
                delete obj[nums[i]];
                count++; 
            }
            else{
                obj[nums[i]]-= 1;
                count++; 
            }                      
        }
    }
    return count;
};