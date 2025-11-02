let numTriplets= function(nums1, nums2){
    let hash= {};
    for(let i= 0; i<nums2.length; i++){
        for(let k= i+1; k<nums2.length; k++){
            if(hash[nums2[i]*nums2[k]]==undefined){
                hash[nums2[i]*nums2[k]]= 1;                
            }  
            else{
                hash[nums2[i]*nums2[k]]+= 1; 
            }       
        }        
    }

    let count= 0;
    for(let i= 0; i<nums1.length; i++){
        if(hash[nums1[i]**2]){
            count+= hash[nums1[i]**2];
        }
    }    

    let hash2= {};
    for(let i= 0; i<nums1.length; i++){
         for(let k= i+1; k<nums1.length; k++){
            if(hash2[nums1[i]*nums1[k]]==undefined){
                hash2[nums1[i]*nums1[k]]= 1;                
            }  
            else{
                hash2[nums1[i]*nums1[k]]+= 1; 
            }     
        }        
    }
    let count2= 0;
    for(let i= 0; i<nums2.length; i++){
        if(hash2[nums2[i]**2]){
            count2+= hash2[nums2[i]**2];
        }
    }  

    return count+count2;
};