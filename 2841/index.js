let maxSum= function(nums, m, k){
    let hash= {};
    let sum= 0;
    let max= 0;
    let count= 0;

    for(let i= 0; i<k; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= 1;
            count++;            
        }
        else{
            hash[nums[i]]+= 1;            
        }
        sum+= nums[i];
    }
    if(count>=m){
        max= sum;
    }    
    
    for(let i= k; i<nums.length; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= 1;
            if(hash[nums[i-k]]==1){
                delete hash[nums[i-k]];                              
            }
            else if(hash[nums[i-k]]==2){
                hash[nums[i-k]]-= 1; 
                count+= 1;                              
            } 
            else{
                hash[nums[i-k]]-= 1;    
                count++;            
            }
            hash[nums[i]]= 1;          
        }
        else{
            hash[nums[i]]+= 1;
            if(hash[nums[i-k]]==1){
                delete hash[nums[i-k]];     
                count--;                        
            } 
            else{
                hash[nums[i-k]]-= 1;                
            }
            
        }
        sum-= nums[i-k];
        sum+= nums[i];
        if(count>=m){
            if(sum>max){
                max= sum;
            }
        }
    }

    return max;
};