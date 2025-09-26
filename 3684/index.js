let maxKDistinct= function(nums, k){
    let index= -1;
    let array= [];

    nums.sort((a,b)=>{
        return b-a;
    });    

    while(k>0&&index<nums.length){
        if(index==-1){
            array.push(nums[index+1]);  
            index++;
            k--;          
        }
        else{
            if(!nums[index+1]||nums[index]==nums[index+1]){
                index++;
            }
            else{
                array.push(nums[index+1]);  
                index++;
                k--;                 
            }
        }
    }
    return array;
};