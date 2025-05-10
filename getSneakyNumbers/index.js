let getSneakyNumbers= function(nums){
    let hash= {};
    let count= 0;
    let array= [];
    for(let i= 0; i<nums.length; i++){
        if(hash[nums[i]]&&count==1){
            array.push(nums[i]);
            return array;
        }
        else if(hash[nums[i]]){
            array.push(nums[i]);
            count++;
        }
        else{
            hash[nums[i]]= true;
        }
    }    
};