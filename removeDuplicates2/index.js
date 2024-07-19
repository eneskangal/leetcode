let removeDuplicates= function(nums){
    for(let i=0; i<nums.length;){
        if(nums[i]==nums[i+1]){
            if(nums[i]==nums[i+2]){                
                nums.splice(i, 1); 
                i--;               
            }
            else{
                i++;
            }
        }
        else{
            i++;
        }
    }    
};