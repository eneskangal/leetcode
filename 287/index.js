let findDuplicate= function(nums){
    const obj= {};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            return nums[i];
        }
        else{
            obj[nums[i]]= nums[i];
        }
    }    
};