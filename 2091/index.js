let minimumDeletions= function(nums){
    let max= -100001;
    let min= 100001;
    let maxIndex= -1;
    let minIndex= -1;
    
    for(let i= 0; i<nums.length; i++){
        if(max<nums[i]){
            max= nums[i];
            maxIndex= i;
        }
        if(min>nums[i]){
            min= nums[i];
            minIndex= i;
        }
    }     
    
    if(maxIndex<=minIndex){
        return Math.min((maxIndex+1+Math.min(minIndex-maxIndex, nums.length-minIndex)), nums.length-maxIndex, minIndex+1);  
    }
    return Math.min((minIndex+1+Math.min(maxIndex-minIndex, nums.length-maxIndex)), nums.length-minIndex);
        
};