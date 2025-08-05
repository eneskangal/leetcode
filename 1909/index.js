let canBeIncreasing= function(nums){
    let index= 0;
    let isFalse= false;
    if(nums[2]==undefined){
        return true;
    }
    for(let i=1; i<nums.length;){
        if(nums[index]<nums[i]){
            i++;
            index++;
        }
        else{
            if(isFalse==false){
                if(nums[index-1]<nums[i]){
                    index= i;
                    isFalse= true;
                    i++;
                }
                else if(nums[index]<nums[i+1]||nums[i+1]==undefined){
                    index= i+1;
                    isFalse= true;
                    i+= 2;
                }
                else if(nums[i]<nums[i+1]&&i==1){
                    index= i;
                    isFalse= true;
                    i+= 2;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
    } 
    return true;    
};