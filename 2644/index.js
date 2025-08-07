let maxDivScore= function(nums, divisors){
    let max;
    let count= 0;
    for(let i= 0; i<divisors.length; i++){
        let subCount= 0;
        for(let k= 0; k<nums.length; k++){
            if(nums[k]%divisors[i]==0&&nums[k]>=divisors[i]){
                subCount++;
            }
        }
        if(subCount==count){            
            if(max>divisors[i]){
                max= divisors[i];
            }            
        }
        else if(subCount>count){            
            max= divisors[i];
            count= subCount;
        }
    }
    return max==undefined ? Math.min(...divisors) : max;    
};