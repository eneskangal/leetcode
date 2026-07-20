let centeredSubarrays= function(nums){
    let hash= {};
    let count= 0;
    if(nums[1]==undefined){
        return 1;
    }
    for(let i= 0; i<nums.length; i++){
        let hash= {};
        let sum= 0;
        for(let k= i; k<nums.length; k++){         
            if(hash[sum+nums[k]]||(sum==0&&k>i)){
                count++;
            }
            hash[nums[k]]= true;
            sum+= nums[k];             
        }        
    }    
    return count+nums.length;
};