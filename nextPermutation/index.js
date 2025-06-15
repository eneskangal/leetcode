let nextPermutation= function(nums){
    for(let i= nums.length-2; i>-1; i--){
        for(let k= nums.length-1; k>i; k--){            
            if(nums[i]<nums[k]){
                let copy= nums[i];
                nums[i]= nums[k];
                nums[k]= copy;
                let sortArray= nums.slice(i+1).sort((a,b)=>{
                    return a-b;
                });
                let array= [...nums.slice(0, i+1), ...sortArray];
                for(let i= 0; i<array.length; i++){
                    nums[i]= array[i];
                }
                return nums;
            }       
        }    
    }
    return nums.reverse();
};    