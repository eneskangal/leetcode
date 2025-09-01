let findSubarrays= function(nums){    
    if(nums[2]==undefined){
        return false;
    }
    let set= new Set();
    for(let i= 0; i<nums.length-1; i++){        
        let diff= nums[i]+nums[i+1]; 
        if(set.has(diff)){
            return true;
        }        
        else{
            set.add(diff);
        }
    }
    return false;
};