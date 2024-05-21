let smallestEqual= function(nums){
    let value= -1;
    for(let i=0; i<nums.length; i++){
        if(i%10==nums[i]%10){
            if(i>value&&value==-1){
                value= i;
            }
            else if(value>i){
                value= i;
            }
        }
    }
    return value;
};