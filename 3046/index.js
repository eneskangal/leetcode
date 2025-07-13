let isPossibleToSplit= function(nums){
    let group1= {};
    let group2= {};
    for(let i=0; i<nums.length; i++){
        if(group1[nums[i]]==undefined){
            group1[nums[i]]= nums[i];
        }
        else if(group2[nums[i]]==undefined){
            group2[nums[i]]= nums[i];
        }
        else{
            return false;
        }
    }
    return true;    
};