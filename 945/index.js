let minIncrementForUnique= function(nums){
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    let count= 0;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]==nums[i+1]){
            nums[i+1]+= 1;
            count++;
        }
        else if(nums[i]>nums[i+1]){
            count+= nums[i]+1-nums[i+1];
            nums[i+1]= nums[i]+1;            
        }
    }    
    return count;
};