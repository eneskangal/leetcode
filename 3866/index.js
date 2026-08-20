let firstUniqueEven= function(nums){
    let hash= {};
    let deletes= {};

    for(let i= 0; i<nums.length; i++){
        if(nums[i]%2==0){
            if(hash[nums[i]]==undefined&&deletes[nums[i]]==undefined){
                hash[nums[i]]= i;
            }
            else{
                delete hash[nums[i]];
                deletes[nums[i]]= 0;
            }           
        }
    }

    let index;
    for(let num in hash){
        if(index==undefined){
            index= hash[num];
        }
        else{
            if(hash[num]<index){
                index= hash[num];
            }
        }
    }    

    return index== undefined ? -1 : nums[index];
};