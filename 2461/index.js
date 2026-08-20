let maximumSubarraySum= function(nums, k){
    let sum= 0;
    let finalSum= 0;
    let hash= {count: 0};

    for(let i= 0; i<k; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= 1;
            sum+= nums[i];
            hash["count"]++;
        }
        else{
            hash[nums[i]]+= 1;
            sum+= nums[i];
        }
    }

    if(hash["count"]==k){
        finalSum= Math.max(finalSum, sum);        
    } 

    for(let i= k; i<nums.length; i++){        
        if(hash[nums[i-k]]==1){
            sum-= nums[i-k];
            delete hash[nums[i-k]];
            hash["count"]--;
            if(hash[nums[i]]==undefined){
                hash[nums[i]]= 1;
                hash["count"]++;
                sum+= nums[i];
                if(hash["count"]==k){
                    finalSum= Math.max(finalSum, sum);                        
                }
            }
            else{
                hash[nums[i]]+= 1;  
                sum+= nums[i];              
            }
            
        }
        else if(hash[nums[i-k]]>1){
            sum-= nums[i-k];
            hash[nums[i-k]]--;
            if(hash[nums[i]]==undefined){
                hash[nums[i]]= 1;
                hash["count"]++;
                sum+= nums[i];
                if(hash["count"]==k){
                    finalSum= Math.max(finalSum, sum);                        
                }
            }
            else{
                hash[nums[i]]+= 1;  
                sum+= nums[i];              
            }
        }      
    }   
    if(hash["count"]==k){
        finalSum= Math.max(finalSum, sum);  
        return finalSum;      
    } 
    return finalSum;    
};