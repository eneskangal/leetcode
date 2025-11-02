let nextGreaterElement= function(nums1, nums2){
    let data= [];
    let hash= {};
    for(let i= 0; i<nums2.length; i++){
        if(data[0]==undefined){
            data[0]= nums2[i];
        }
        else{
            if(data[data.length-1]>nums2[i]){
                data.push(nums2[i]);
            }
            else{
                let k= data.length-1;
                while(data[k]<nums2[i]){
                    hash[data[k]]= nums2[i];
                    data.pop();                
                    k--;
                }
                data.push(nums2[i]);
            }
        }
    }    

    let answers= [];
    for(let i= 0; i<nums1.length; i++){
        if(hash[nums1[i]]==undefined){
            answers.push(-1);
        }
        else{
            answers.push(hash[nums1[i]]);
        }
    }  

    return answers;      
};