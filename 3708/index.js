let longestSubarray= function(nums){
    let maxLength= 0;
    let array= [];
    for(let i= 0; i<nums.length; i++){   
        if(nums[i]+nums[i+1]==nums[i+2]){
           if(array.length==0){
                maxLength= Math.max(maxLength, 2);
                array= [nums[i], nums[i+1]];
            } 
            else{
                array.push(nums[i+1]);
            }
        }
        else if(nums[i]==nums[i+1]){
            if(array.length==0){
                array.push(nums[i]);
            } 
            else{
                maxLength= Math.max(array.length+1, maxLength);
                array= [nums[i]];
            }           
        }
        else{
            maxLength= Math.max(array.length+1, maxLength);
            array= [];               
        }
    }
    return Math.max(array.length+1, maxLength, 2);  
};