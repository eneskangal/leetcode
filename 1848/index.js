let getMinDistance= function(nums, target, start){
    let minIndex= 1001;   
    for(let i= 0; i<nums.length; i++){
        if(nums[i]==target){
            let result= Math.abs(i-start);
            if(minIndex>result){
                minIndex= result;
            }
        }
    }
    return minIndex; 
};