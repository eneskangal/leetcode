let lengthOfLIS= function(nums){
    let lis= [];

    for(let i=0; i<nums.length; i++){
        lis[i]= 1;
    }

    for(let i= 1; i<nums.length; i++){
        let count= i;        
        for(let k= 0; k<i; k++){
            if(nums[i]>nums[k]){
                if(lis[k]+1>lis[i]){
                    lis[i]= lis[k]+1; 
                }
                if(count==1){
                    break;
                }
                else{
                    count-= 1;
                }
            }
        }
    }
    return Math.max(...lis);    
};