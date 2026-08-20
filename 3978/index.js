let isMiddleElementUnique= function(nums){
    let middle= Math.floor(nums.length/2);
    let value= nums[middle];

    for(let i= 0; i<nums.length; i++){
        if(value==nums[i]){
            if(middle!=i){
                return false;
            }
        }
    }    
    return true;
};