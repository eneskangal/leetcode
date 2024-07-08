let rotate= function(nums, k){
    let hashTable= {};
    for(let i=1; i<nums.length+1; i++){
        hashTable[((i-1+k)%nums.length)]= nums[i-1];
    }
    for(const prop in hashTable){
        nums[prop]= hashTable[prop];
    }    
};