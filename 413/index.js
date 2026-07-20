let numberOfArithmeticSlices= function(nums){
    if(nums[2]==undefined){
        return 0;
    } 

    let count= 0;
    let first= undefined;
    let second= undefined;
    let subCount= 2;

    for(let i= 0; i<nums.length; i++){             
        if(first==undefined){
            first= nums[i];
        }
        else{
            if(second==undefined){
                second= nums[i];
            }
            else{
                if((nums[i]-second)==(second-first)){
                    first= second;
                    second= nums[i];
                    subCount++;                    
                }
                else{                    
                    if(subCount>2){
                        count+= ((subCount-2)*(subCount-1)/2);
                    }                    
                    first= nums[i-1];
                    second= nums[i];
                    subCount= 2;                    
                }
            }
        }
    }
    if(subCount==2){
        return count;
    }
    return count+((subCount-2)*(subCount-1)/2);
};