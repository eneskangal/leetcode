let countDistinctIntegers= function(nums){
    let obj= {};
    for(let i= 0; i<nums.length; i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]= nums[i];
            let numToString= nums[i]+"";
            let toSplit= numToString.split("");
            let reverseArray= toSplit.reverse();
            let toJoin= reverseArray.join("");
            if(obj[parseInt(toJoin)]==undefined){
                obj[parseInt(toJoin)]= obj[parseInt(toJoin)];
            }
        }
    } 
    return Object.values(obj).length;   
};