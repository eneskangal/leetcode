let returnToBoundaryCount= function(nums){
    let curr= 0;
    let count= 0;
    for(let i= 0; i<nums.length; i++){
        if(curr+nums[i]==0){
            curr= 0;
            count++;
        }
        else{
            curr+= nums[i];
        }
    }
    return count;    
};