let findMiddleIndex= function(nums){
    let lefts= 0;
    let rights= 0;
    for(let i= 0; i<nums.length; i++){
        rights+= nums[i];
    }
    for(let i= 0; i<nums.length; i++){
        if(rights-nums[i]==lefts){
            return i;            
        }
        else{
            lefts+= nums[i];
            rights-= nums[i];
        }
    }
    return -1;        
};