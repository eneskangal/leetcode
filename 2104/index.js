let subArrayRanges= function(nums){
    let sum= 0;
    for(let i= 0; i<nums.length; i++){
        let max= nums[i];
        let min= nums[i];

        for(let k= i+1; k<nums.length; k++){
            min= Math.min(min, nums[k]);
            max= Math.max(max, nums[k]);
            sum+= max-min;
        }        
    }  
    return sum;  
};