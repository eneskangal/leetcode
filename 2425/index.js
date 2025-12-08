let xorAllNums= function(nums1, nums2){
    let totalXor= 0;
    let totalXor2= 0;

    for(let i= 0; i<nums1.length; i++){
        totalXor^= nums1[i];
    }

    for(let i= 0; i<nums2.length; i++){
        totalXor2^= nums2[i];
    }

    if(nums2.length%2===0){
        if(nums1.length%2===0){
            return 0;
        } 
        return totalXor2;
    } 
    else{
        if(nums1.length%2===0){
            return totalXor;
        }
        return totalXor^totalXor2;
    }
};
