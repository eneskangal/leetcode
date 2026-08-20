let longestOnes= function(nums, k){
    let max= 0;
    let length= 0;
    let zerosLength= 0;
    let zeros= [];
    let lastIndex= 0;

    if(k==0){
        for(let i= 0; i<nums.length; i++){
            if(nums[i]==1){
                length++;
            }
            else{
                max= Math.max(length, max);
                length= 0;
            }
        }
        return Math.max(length, max);   
    }

    for(let i= 0; i<nums.length; i++){
        if(nums[i]==1){
            length++;
        }
        else{            
            if(zerosLength==k){
                max= Math.max(max, length);
                let lastIndexCopy= zeros.shift();
                length-= lastIndexCopy-lastIndex;
                lastIndex= lastIndexCopy+1;
                zeros.push(i);
            }
            else{
                zerosLength++;
                length++;
                zeros.push(i);
            }
        }
    }
    return Math.max(length, max);    
};