let countPairs= function(nums, target){
    let count= 0;
    let hedef;
    for(let i=0; i<nums.length; i++){
        for(let k=i+1; k<nums.length; k++){            
            if(nums[k]<target-nums[i]){               
                count++;
            }
        }
    }
    return count;
};