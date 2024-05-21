let divideArray= function(nums){
    const obj= {};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            delete obj[nums[i]];
        }
        else{
            obj[nums[i]]= nums[i];
        }
    }
    for(let property in obj){
        return false;
    }
    return true;
};