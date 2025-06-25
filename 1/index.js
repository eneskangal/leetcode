let twoSum= function(nums, target){
    let remains= {};    
    for(let i= 0; i<nums.length; i++){
        if(remains[nums[i]]==undefined){
            remains[target-nums[i]]= i; 
        }
        else{
            return [remains[nums[i]],i];
        }
    }
};