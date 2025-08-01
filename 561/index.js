let arrayPairSum= function(nums){
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    let sum= 0;
    for(let i= 0; i<nums.length; i+=2){
        if(nums[i]<nums[i+1]){
            sum+= nums[i];
        }
        else{
            sum+= nums[i+1];
        }
    } 
    return sum;   
};