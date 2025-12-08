let minimumRightShifts= function(nums){
    let count= 0;
    for(let i= 0; i<nums.length;){
        if(nums[i]>nums[i+1]){
            if(nums.at(-1)<nums[0]){
                count++;
                nums[0]= nums.at(-1);
                nums.splice(-1, 1);
                i= i-1;                
            }
            else{                
                return -1;
            }
        }
        else{
            i++;
        }
    }  
    return count;  
};