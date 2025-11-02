let sumOfEncryptedInt= function(nums){
    let sum= 0;
    function findMaxDeci(string){
        let max= 0;
        for(let i= 0; i<string.length; i++){
            if(max<string[i]){
                max= string[i];
            }
        }
        return max;
    }

    for(let i= 0; i<nums.length; i++){
        let convertToString= nums[i]+"";
        let max= findMaxDeci(convertToString);
        sum+= max.repeat(convertToString.length)*1;
    }    
    return sum;
};