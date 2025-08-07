let subarraySum= function(nums, k){
    let count= 0;
    for(let i= 0; i<nums.length; i++){
        let sum= 0;
        for(let j= i; j<nums.length; j++){ 
            if(sum+nums[j]==k){
                sum+= nums[j];
                count++;
            } 
            else{
                sum+= nums[j];
            }                       
        }       
    }    
    return count;
};