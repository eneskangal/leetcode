let pivotIndex= function(nums){
    let count= 0;
    let prefixes= [];
    for(let i= 0; i<nums.length; i++){
        if(i==0){
            prefixes[0]= nums[i];
        }
        else{
            prefixes[i]= prefixes[count]+nums[i];
            count++;
        }
    }

    let left= 0;
    let right= prefixes[count];
    for(let i= 0; i<nums.length; i++){
        if(left==right-nums[i]){
            return i;
        }
        else{
            left+= nums[i];
            right-= nums[i];
        }
    } 
    return -1;  
};