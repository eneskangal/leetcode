let getCommon= function(nums1, nums2){
    let hash= {};
    
    for(let i= 0; i<nums1.length; i++){
        hash[nums1[i]]= true;
    }   

    for(let i= 0; i<nums2.length; i++){
        if(hash[nums2[i]]){
            return nums2[i];
        }
    }    
    return -1; 
};