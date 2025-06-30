let findIntersectionValues= function(nums1, nums2){
    let obj= {};
    let array= [0, 0];
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
            array[0]+= obj[nums2[i]];
            array[1]+= 1; 
            obj[nums2[i]]= 0;
        }
        else if(obj[nums2[i]]==0){
            array[1]+= 1; 
        }
    }
    return array;    
};