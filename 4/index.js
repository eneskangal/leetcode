let findMedianSortedArrays= function(nums1, nums2){
    const sortMergeArrays= nums1.concat(nums2).sort((a,b)=>{return a-b});
    if((nums1.length+nums2.length)%2==0){        
        const length= sortMergeArrays.length;
        return (sortMergeArrays[(length/2)-1]+sortMergeArrays[length/2])/2;
    }
    return sortMergeArrays[(sortMergeArrays.length-1)/2];
};