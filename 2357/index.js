let minimumOperations= function(nums){
    let stack= [];
    for(let i=0; i<nums.length; i++){
        if(0<nums[i]){
            if(stack.length==0){
                stack.push(nums[i]);
            }
            else{
                for(let k= stack.length-1; k>-1; k--){
                    if(stack[k]==nums[i]){
                        break;
                    }
                    else if(stack[k]<nums[i]){
                        stack.splice(k+1, 0, nums[i]);
                        break;
                    }
                    else if(k==0){
                        stack.splice(k, 0, nums[i]);
                        break;
                    }
                }
            }
        }
    }

    let count= 0;
    for(let i= 0; i<stack.length; i++){
        for(let k= i+1; k<stack.length; k++){
            if(stack[k]>0){
                stack[k]-= stack[i];     
            }       
        }
        count++;
    }
    return count;      
};