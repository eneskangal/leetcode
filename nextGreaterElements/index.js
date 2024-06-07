let nextGreaterElements= function(nums){
    const array= [];
    for(let i= 0; i<nums.length; i++){
        for(let k= i+1; k<nums.length; k++){
            if(nums[i]<nums[k]){
                array.push(nums[k]);
                break;
            }
        }
        if(array[i]==undefined){
            for(let j= 0; j<i; j++){
                if(nums[i]<nums[j]){
                    array.push(nums[j]);
                    break;
                }
            }            
        }
        if(array[i]==undefined){
            array.push(-1);
        }
    }
    return array;           
}