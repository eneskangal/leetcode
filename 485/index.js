let findMaxConsecutiveOnes= function(nums){
    let max= 0;
    let subMax= 0;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]==1&&nums[i]==nums[i+1]){
            subMax++;
        }
        else if(nums[i]==1){
            if(subMax+1>max){
                max= subMax+1;
            }
        }
        else{
            if(subMax+1>max){
                max= subMax==0 ? 0 : subMax+1;
            }
            subMax= 0;
        }
    } 
    if(subMax+1>max){
        return subMax==0 ? 0 : subMax+1;
    }   
    return max;
};