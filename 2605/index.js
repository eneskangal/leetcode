let minNumber= function(nums1, nums2){
    let hash= {};
    let min;

    for(let i= 0; i<nums1.length; i++){
        hash[nums1[i]]= true;
    }

    for(let i= 0; i<nums2.length; i++){
        if(hash[nums2[i]]){
            if(min==undefined){
                min= nums2[i];
            }
            if(min>nums2[i]){
                min= nums2[i];
            }
        }
    }

    if(min==undefined){
        let firstNumber= Math.min(...nums1);
        let secondNumber= Math.min(...nums2);

        if(firstNumber<secondNumber){
            return (firstNumber*10)+secondNumber;
        }
        return (secondNumber*10)+firstNumber;
    }   
    return min;
};