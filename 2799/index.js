let countCompleteSubarrays= function(nums){
    let map= {count: 0};
    
    for(let i= 0; i<nums.length; i++){
        if(map["count"]==0){
            map["count"]++;
            map[nums[i]]= nums[i];
        }
        else if(map[nums[i]]==undefined){
            map["count"]++;
            map[nums[i]]= nums[i];
        }
    }

    let sumCount= 0;
    for(let i= 0; i<nums.length; i++){
        let hash= {"count": 0};
        for(let k= i; k<nums.length; k++){
            if(hash["count"]==0){
                hash["count"]++;
                hash[nums[k]]= nums[k];
                if(hash["count"]==map["count"]){
                    sumCount++;
                }
            }
            else if(hash[nums[k]]==undefined){
                hash["count"]++;
                hash[nums[k]]= nums[k];
                if(hash["count"]==map["count"]){
                    sumCount++;
                }
            }
            else{
                if(hash["count"]==map["count"]){
                    sumCount++;
                }
            }
        }
    }
    return sumCount;
};