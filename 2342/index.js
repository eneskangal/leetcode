let maximumSum= function(nums){
    let count= 0;
    function sumofDigits(num){
        let result= 0;
        for(let i= 0; i<num.length; i++){
            result+= num[i]*1;
        }
        return result;
    }
    let hash= {};
    let max= 0;

    for(let i= 0; i<nums.length; i++){
        let result= sumofDigits(nums[i].toString()); 
        if(hash[result]==undefined){
            hash[result]= nums[i];
        }
        else{
            max= Math.max(max, hash[result]+nums[i]);
            hash[result]= Math.max(hash[result], nums[i]);
        }       
    } 

    return max== 0 ? -1 : max;   
};