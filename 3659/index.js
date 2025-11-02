let partitionArray= function(nums, k){
    if(nums.length%k!=0){
        return false;
    }

    let limit= nums.length/k;
    let hash= {};
    for(let i= 0; i<nums.length; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= 1;
        }
        else if(hash[nums[i]]==limit){
            return false;
        }  
        else{
            hash[nums[i]]+= 1;
        }      
    }    

    return true; 
};