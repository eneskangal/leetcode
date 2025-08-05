let numberOfPairs= function(nums){
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    let pair= 0;
    let remain= nums.length;
    for(let i= 0; i<nums.length;){
        if(nums[i]==nums[i+1]){
            pair++;
            remain-= 2;
            i+= 2;
        }
        else{
            i++;
        }
    }   

    return [pair, remain]; 
};
