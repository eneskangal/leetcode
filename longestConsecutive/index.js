let longestConsecutive= function(nums){
    let memo= 0;
    let subMemo= 0;
    nums= nums.sort((a,b)=>{return a-b});
    for(let i= 0; i<nums.length; i++){
        if(nums[i]+1==nums[i+1]){
            if(subMemo+1>subMemo){
                subMemo++;
            }
            else{
                if(subMemo>memo){
                    memo= subMemo;                    
                }
                subMemo= 0;
            }
        }
        else if(nums[i]==nums[i+1]){
        }
        else{
            if(subMemo>=memo){
                memo= subMemo+1;                    
            }
            subMemo= 0;            
        }
    }
    if(subMemo>memo){
        return subMemo;
    } 
    return memo; 
};