
let minAbsoluteDifference= function(nums){
    let min= (2**31)-1;
    let hash= {};

    for(let i= 0; i<nums.length; i++){
        if(nums[i]==1){
            hash[nums[i]]= i;
            if(hash[2]!=undefined){
                min= Math.min(i-hash[2], min);
            }
        }
        else if(nums[i]==2){
            if(hash[1]!=undefined){
                min= Math.min(i-hash[1], min);
            }            
            hash[nums[i]]= i;
        }
    }    

    return min==(2**31)-1 ? -1 : min;
};