let findMissingElements= function(nums){
    let max= Math.max(...nums);
    let min= Math.min(...nums);
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    let results= [];
    let index= 0;
    for(let i= min; i<=max;){
        if(i!=nums[index]){
            results.push(i);
            i++;
        }
        else{
            i++;
            index++;
        }
    }
    return results;
};