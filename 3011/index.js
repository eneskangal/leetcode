let canSortArray= function(nums){
    function findBit1Length(number){
        let convert= number.toString(2);
        let count= 0;
        for(let i= 0; i<convert.length; i++){
            if(convert[i]=="1"){
                count++;
            }
        }
        return count;
    } 

    for(let i= 1; i<nums.length; i++){        
        for(let k= i-1; k>-1; k--){
            let first= findBit1Length(nums[k+1]);
            let second= findBit1Length(nums[k]);
            if(second==first){                
                if(nums[k]>nums[k+1]){
                    let temp= nums[k];
                    nums[k]= nums[k+1];
                    nums[k+1]= temp;
                }                
            }
        }
    }
    for(let i= 0; i<nums.length-1; i++){
        if(nums[i]>nums[i+1]){
            return false;
        }
    }
    return true;       
};