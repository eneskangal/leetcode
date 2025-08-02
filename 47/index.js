let permuteUnique= function(nums, array= []){
    let data= [];
    if(array[0]==undefined){
        hash= {};
    }
    for(let i= 0; i<nums.length; i++){
        if(nums[1]==undefined){
            let word= [...array, nums[i]];
            if(hash[word]==undefined){
                hash[word]= true;
                return [word];
            } 
            else{
                return false;
            }
        }
        else{
            let val= nums[i];
            let copy= [...nums];
            nums.splice(i,1);
            let result= [permuteUnique(nums, [...array, val])];            
            if(result[0]!=false){
                data.push(result);
            }
            nums= [...copy];
        }
    }
    return data.flat(2);
};