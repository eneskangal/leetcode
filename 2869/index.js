let minOperations= function(nums, k){
    let count= 0;
    let countNumbers= k;
    let obj= {};
    for(let i= nums.length-1; i>-1; i--){
        if(countNumbers==0){
            return count;
        }
        if(nums[i]<=k){
            if(obj[nums[i]]==undefined){
                obj[nums[i]]= true;
                countNumbers--;
                count++;
            }
            else{
                count++;
            }
        }
        else{
            count++;
        }
    }
    return count;    
};