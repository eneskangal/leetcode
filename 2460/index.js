let applyOperations= function(nums){
    let array= [];
    let zeroes= [];

    for(let i= 0; i<nums.length;){
        if(nums[i]==nums[i+1]){
            if(nums[i]==0){
                zeroes.push(nums[i]);
                i++;
            }
            else{
                array.push(nums[i]*2);
                zeroes.push(0);
                i+= 2;
            }
        }
        else{
            if(nums[i]==0){
                zeroes.push(nums[i]);
                i++;
            }
            else{
                array.push(nums[i]);
                i++;
            }
        }
    }    

    return [...array, ...zeroes];
};