let countMajoritySubarrays= function(nums, target){
    let count= 0;
    for(let i= 0; i<nums.length; i++){
        let border= 0;
        let diffElements= 0;
        for(let k= i; k<nums.length; k++){
            if(nums[k]==target){
                if(border+1>diffElements){
                    count++;
                    border++;
                }
                else{
                    border++;
                }
            }
            else{
                if(border>diffElements+1){
                    count++;
                    diffElements++;
                }
                else{
                    diffElements++;
                }
            }
        }     
    }    
    return count;
};