let countMatchingSubarrays= function(nums, pattern){
    let count= 0;
    for(let i= 0; i<nums.length-pattern.length; i++){
        let isIn= false;
        for(let k= 0; k<pattern.length; k++){
            if(pattern[k]==1){                
                if(nums[i+k+1]<=nums[i+k]){
                    isIn= true;
                    break;
                }
            }
            else if(pattern[k]==0){
                if(nums[i+k+1]!=nums[i+k]){
                    isIn= true;
                    break;
                }
            }
            else{
                if(nums[i+k+1]>=nums[i+k]){
                    isIn= true;
                    break;
                }                
            }        
        }  
        if(isIn==false){
            count++;
        }      
    }
    return count;    
};