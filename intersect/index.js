let intersect= function(nums1, nums2){
    let stack= [];
    let obj= {};
    for(let i= 0; i<nums1.length; i++){
        if(obj[nums1[i]]==undefined){
            obj[nums1[i]]= 1;
        }
        else{
            obj[nums1[i]]+= 1;
        }
    }

    for(let i= 0; i<nums2.length; i++){
        if(obj[nums2[i]]>0){
            obj[nums2[i]]-= 1;
            stack.push(nums2[i]);
        }
    } 
    return stack;   
};