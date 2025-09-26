let maxSum= function(nums){
    let maxes= {};
    let pairs= [];

    for(let i= 0; i<nums.length; i++){
        let converString= nums[i]+"";
        let max= -1;
        for(let k= 0; k<converString.length; k++){
            max= Math.max(converString[k], max);
        }
        if(maxes[max]==undefined){
            maxes[max]= nums[i];
        }
        else{
            if(maxes[max]<=nums[i]){
                pairs.push(nums[i]+maxes[max]);
                maxes[max]= nums[i];                
            }
            else{
                pairs.push(nums[i]+maxes[max]);                
            }
        }
    }    

    if(pairs[0]==undefined){
        return -1;
    }

    return Math.max(...pairs);
};