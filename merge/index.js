let merge= function(nums1, m, nums2, n){
    let k= 0;    
    for(let i= 0; i<nums1.length; i++){
        if(m==0){
            nums1[i]= nums2[k];
            k++;
            n--;
        }        
        else if(nums1[i]<nums2[k]){                 
            m= m-1;
        }
        else if(nums1[i]>nums2[k]){
            nums1.splice(i,0,nums2[k]);
            nums1.pop();          
            k++;
            n= n-1;      
        }
        else if(nums1[i]==nums2[k]){
            nums1.splice(i, 0, nums2[k]);
            nums1.pop();
            k++;
            n--;            
        }             
    }
};