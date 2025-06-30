let transformArray= function(nums){
    let array= [];
    for(let i= 0; i<nums.length; i++){
        if(nums[i]%2==0){
            array.push(0);
        }
        else{
            array.push(1);
        }
    }
    return array.sort();    
};