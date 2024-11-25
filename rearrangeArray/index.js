let rearrangeArray= function(nums){
    let array= [];
    let even= 0;
    let odd= 1;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]<0){
            array[odd]= nums[i];
            odd+= 2;
        }
        else{
            array[even]= nums[i];
            even+= 2;
        }
    }
    return array;        
};