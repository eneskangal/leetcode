let largestNumber= function(nums){
    let stack= [];
    for(let i= 0; i<nums.length; i++){
        if(i==0){
            stack.push(nums[i]+"");
        }
        else{
            for(let k= stack.length-1; k>-1; k--){
                let op1= stack[k]+nums[i];
                let op2= nums[i]+stack[k];
                if(op1>op2){
                    stack.splice(k+1, 0, nums[i]+"");
                    break;
                }
                if(k==0){
                    stack.unshift(nums[i]+"");
                    break;
                }
            }
        }
    }
    if(stack[0]==0){
        return "0";
    }
    return stack.join("");
};