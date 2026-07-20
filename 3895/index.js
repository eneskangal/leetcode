let countDigitOccurrences= function(nums, digit){
    let count= 0;
    for(let i= 0; i<nums.length; i++){
        let toString= nums[i]+"";
        let k= 0;
        while(k<toString.length){
            if(toString[k]==digit){
                count++;
            }
            k++;
        }
    }
    return count;    
};