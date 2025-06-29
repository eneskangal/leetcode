let twoOutOfThree= function(nums1, nums2, nums3){
    let hash= {};
    let hashTwo= {};
    const data= [];
    for(let i= 0; i<nums1.length; i++){
        if(hash[nums1[i]]==undefined){
           hash[nums1[i]]= 1; 
        }
    }
    for(let i= 0; i<nums2.length; i++){
        if(hash[nums2[i]]!=undefined){
            if(hashTwo[nums2[i]]==undefined&&hash[nums2[i]]!=2){
                hashTwo[nums2[i]]= nums2[i]; 
            }           
        }
        else{
           hash[nums2[i]]= 2;  
        }
    }
    for(let i= 0; i<nums3.length; i++){
        if(hash[nums3[i]]!=undefined){
            if(hashTwo[nums3[i]]==undefined&&hash[nums3[i]]!=3){
                hashTwo[nums3[i]]= nums3[i]; 
            }           
        }
        else{
           hash[nums3[i]]= 3;  
        }
    }
    return Object.keys(hashTwo);      
};