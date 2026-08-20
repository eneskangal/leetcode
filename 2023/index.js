let numOfPairs= function(nums, target){
    let count= 0;
    for(let i= 0; i<nums.length; i++){
        for(let k= 0; k<nums.length; k++){
            if(i!=k&&target==(nums[i]+nums[k])){
                count++;
            }
        }        
    }    

    return count;
};