let countAlternatingSubarrays= function(nums){
    let count= nums.length;
    let length= 1;
    for(let i= 1; i<nums.length; i++){
        if (nums[i]!==nums[i - 1]){
            length+= 1;
        } 
        else{
            length= 1;
        }
        count+= length-1;
    }
    return count;
};