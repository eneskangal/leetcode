let permute= function(nums, array= []){
    let data= [];
    for(let i= 0; i<nums.length; i++){
        if(nums[1]==undefined){
            return [[...array, nums[i]]];
        }
        else{
            let val= nums[i];
            let copy= [...nums];
            nums.splice(i,1);
            data.push([permute(nums, [...array, val])]);
            nums= [...copy];
        }
    }
    return data.flat(2);
};