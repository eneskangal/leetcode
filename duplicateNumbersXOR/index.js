let duplicateNumbersXOR= function(nums){
    let obj= {};
    let result;
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]= nums[i];            
        }
        else{
            if(result==undefined){
                result= nums[i];
            }
            else{
                result^= nums[i];
            }
        }
    }  
    if(result==undefined){
        return 0;
    }
    return result;
};