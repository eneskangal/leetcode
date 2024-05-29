let pivotArray= function(nums, pivot){
    const left= [];
    const right= [];
    const center= [];
    for(let i=0; i<nums.length; i++){
        if(pivot>nums[i]){
            left.push(nums[i]);
        }
        else if(pivot==nums[i]){
            center.push(nums[i]);
        }
        else{
            right.push(nums[i]);
        }
    }
    return [...left, ...center, ...right];   
};