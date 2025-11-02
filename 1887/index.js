let reductionOperations= function(nums){
    let hash= {};
    let array= [];
    for(let i= 0; i<nums.length; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= 1;
            array.push(nums[i]);
        }
        else{
            hash[nums[i]]+= 1;            
        }
    }

    array= array.sort((a,b)=>{
        return b-a;
    });

    let count= 0;
    for(let i= 0; i<array.length; i++){
        count+= (array.length-1-i)*(hash[array[i]]);
    }

    return count;
};