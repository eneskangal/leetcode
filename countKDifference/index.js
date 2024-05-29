let countKDifference= function(nums, k){
    let count= 0;
    for(let i=0; inums.length; i++){
        for(let j= i+1; jnums.length; j++){            
            if(nums[i]+k==nums[j]){
                count++;
            }
            if(nums[i]-k==nums[j]){
                count++;
            }            
        }
    }   
    return count; 
};