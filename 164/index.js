let maximumGap= function(nums){
    let gap= 0;
    nums= nums.sort((a,b)=>{
        return a-b;
    });
    for(let i=0; i<nums.length; i++){
        if(nums[i+1]!=undefined){
            if(gap<Math.abs(nums[i+1]-nums[i])){
                gap= Math.abs(nums[i+1]-nums[i]);
            }
        }
    } 
    return gap;   
};