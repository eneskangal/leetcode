let increasingTriplet= function(nums){
    let hashTable= {};
    for(let i=0; i<nums.length; i++){
        for(let prop in hashTable){
            let index= prop.lastIndexOf("<");             
            if(prop.slice(index==-1 ? 0 : index+1)<nums[i]){             
                if(hashTable[prop]<2){
                    hashTable[`${prop}<${nums[i]}`]= hashTable[prop]+1;
                }
                else{
                    return true;
                }
            }
        }
        hashTable[nums[i]]= 1;               
    }
    return false; 
}