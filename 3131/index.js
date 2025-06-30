/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    const nums1Reduce= nums1.reduce((a,b)=>{
        return a+b;
    },0);

    const nums2Reduce= nums2.reduce((a,b)=>{
        return a+b;
    },0);

    if(nums1Reduce<=nums2Reduce){
        return (nums2Reduce-nums1Reduce)/nums1.length;
    }
    else{
        return -1*(nums1Reduce-nums2Reduce)/nums1.length;
    }
};