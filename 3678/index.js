let smallestAbsent= function(nums){
    let hash= {};
    let sum= 0;
    let count= 0;

    for(let i= 0; i<nums.length; i++){
        hash[nums[i]]= nums[i];
        sum+= nums[i];
        count++;
    }    

    let start= Math.trunc(sum/count);
    for(let i= start+1; i<102; i++){
        if(hash[i]==undefined&&i>0){
            return i;
        }
    }

};