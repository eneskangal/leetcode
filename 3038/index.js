let maxOperations= function(nums){
    let max= 0;
    let subMax= 0;
    let previousSum= 0;
    for(let i= 0; i<nums.length;){
        if(previousSum==0){
            previousSum+= nums[i]+nums[i+1];   
            subMax++;   
            i+= 2;      
        }
        else{
            if(previousSum==nums[i]+nums[i+1]){
                subMax++;
                i+= 2;
            }
            else{
                if(subMax>max){
                    previousSum+= nums[i]+nums[i+1];   
                    max= subMax;
                    subMax= 0;  
                } 
                else{
                    previousSum+= nums[i]+nums[i+1];   
                    subMax= 0;                     
                } 
                i++;              
            }
        }
    }
    return max>subMax ? max : subMax;    
};