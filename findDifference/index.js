let findDifference= function(nums1, nums2){
    let array= [];
    let array2= [];
    const obj= {};
    const obj2= {};
    for(let i=0; i<nums1.length; i++){
        if(obj[nums1[i]]==undefined){
            obj[nums1[i]]= i;
            array.push(nums1[i]);
        }        
    }
    for(let i=0; i<nums2.length; i++){
        if(obj2[nums2[i]]==undefined){
            obj2[nums2[i]]= i;
            array2.push(nums2[i]);
        }        
    }
    for(const prop in obj2){       
        if(obj[prop]!=undefined){                   
            array.splice(array.indexOf(prop*1),1);            
            array2.splice(array2.indexOf(prop*1),1);
        }        
    }  
    return [array, array2];
};