let findNonMinOrMax= function(nums){
    if(nums[2]==undefined){
        return -1;
    }    
    return nums.sort((a,b)=>{
        return a-b;
    })[1];
};