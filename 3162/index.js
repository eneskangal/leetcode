let numberOfPairs= function(nums1, nums2, k){ 
    let count= 0;
    for(let i=0; i<nums2.length; i++){
        let filter= nums1.filter((num)=>num%(nums2[i]*k)==0);
        count+= filter.length;
    }
    return count;
};