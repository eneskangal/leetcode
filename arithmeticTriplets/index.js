let arithmeticTriplets= function(nums, diff){
    let count= 0;
    const obj= {};
    obj[nums[0]]= nums[0];
    obj[nums[1]]= nums[1];
    for(let i=2; i<nums.length; i++){  
        if(obj[nums[i]-diff]!=undefined&&obj[nums[i]-diff*2]!=undefined){
            count++;
        } 
        obj[nums[i]]= nums[i];     
    }
    return count;
};