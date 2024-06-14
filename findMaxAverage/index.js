let findMaxAverage= function(nums, k){
    let max;
    let result= 0;
    let decreaseK= k-1;
    for(let i= 0; i<nums.length; i++){        
        if(i==0){
            for(let j= 0; j<k; j++){
                result+= nums[j];
            }
            max= result/k;
        }
        else{
            result-= nums[i-1];                      
            result+= nums[i+decreaseK];
            if(max<result/k){
                max= result/k;
            }
        } 
    }
    return max;    
};