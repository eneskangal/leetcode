let findValidElements= function(nums){
    let lefts= [];
    let rights= [];

    for(let i= 0; i<nums.length-1; i++){
        if(i==0){
            lefts.push(nums[i]);
        }
        else{
            if(lefts.at(-1)<nums[i]){
                lefts.push(nums[i]);
            }
            else{
                lefts.push(lefts.at(-1));
            }
        }
    }

    for(let i= nums.length-1; i>-1; i--){
        if(i==nums.length-1){
            rights.push(nums[i]);
        }
        else{
            if(rights.at(0)<nums[i]){
                rights.unshift(nums[i]);
            }
            else{
                rights.unshift(rights.at(0));
            }
        }
    }
    
    let array= [];
    for(let i= 0; i<nums.length; i++){
        if(i==0){
            array.push(nums[i]);
        }
        else if(i==nums.length-1){
            array.push(nums[i]);            
        }
        else{
            if(lefts[i-1]<nums[i]){
                array.push(nums[i]);
            }
            else if(rights[i+1]<nums[i]){
                array.push(nums[i]);
            }
        }
    }  

    return array; 
};