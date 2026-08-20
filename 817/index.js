let numComponents= function(head, nums){
    let hash= {};

    for(let i= 0; i<nums.length; i++){
        hash[nums[i]]= 1;
    }

    let length= 0;
    let subLength= 0;

    while(head){
        if(hash[head.val]!=undefined){    
            subLength++;      
        }
        else{
            if(subLength>0){
                length++;
                subLength= 0;
            }
        }
        head= head.next;
    } 
    if(subLength>0){
        return length+1;
    }   

    return length;
};