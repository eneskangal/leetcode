let minOperations= function(nums){
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    let count= 0;    
    for(let i= 0; i<nums.length;){
        if(nums[i]==nums[i+1]&&nums[i]==nums[i+2]){            
            if(nums[i+3]!=nums[i]){
                i+=3;
                count++;
            }
            else if(nums[i+4]!=nums[i]){
                i+= 2;
                count++;                
            }
            else if(nums[i+3]==nums[i]&&nums[i+1]==nums[i]&&nums[i+2]==nums[i]){
                i+=3;
                count++;                
            }
        }
        else if(nums[i]==nums[i+1]&&nums[i]!=nums[i+2]){
            i+= 2;
            count++;
        }
        else if(nums[i]!=nums[i+1]){
            return -1;
        }
    }
    return count;    
};