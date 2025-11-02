let evenNumberBitwiseORs= function(nums){
    let result= 0;    
    let count= 0;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]%2==0){
            if(count==0){
                result= nums[i];
                count++;
            }
            else{
                result|= nums[i];
            }
        }
    }
    return result
};