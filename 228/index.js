let summaryRanges= function(nums){
    let stack= [];
    let isIn;
    let stackLength= -1;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]+1==nums[i+1]){
            if(isIn==undefined){
                isIn= nums[i];
                stack.push(nums[i]+"->");
                stackLength++;
            }
        }
        else{
            if(isIn==undefined){
                stack.push(nums[i]+"");
                stackLength++;
            }
            else{                
                stack[stackLength]+= nums[i];
                isIn= undefined;
            }
        }
    } 
    return stack;   
};