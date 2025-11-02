let arrayNesting= function(nums){
    let array= new Array(nums.length).fill(false);
    let max= 0;
    for(let i= 0; i<nums.length; i++){
        let count= 0;
        let start= i;
        while(array[nums[start]]==false){
            array[nums[start]]= true;
            count++;
            start= nums[start];
        }
        max= Math.max(max, count);
    }    
    return max;
};