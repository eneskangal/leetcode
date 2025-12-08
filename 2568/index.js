let minImpossibleOR= function(nums){
    nums= nums.sort((a,b)=>{
        return a-b;
    });
    let index= 0;
    for(let i= 0; i<nums.length; i++){       
        if(2**index==nums[i]){
            index++;
        }       
    }

    return 2**(index);    
};