let largestDivisibleSubset= function(nums){
    let biggest= [nums[0]];
    let data= [];        
    nums= nums.sort((a,b)=>{
        return a-b;
    });    

    for(let i= 0; i<nums.length; i++){
        data[i]= [nums[i]];                
        for(let k= i-1; k>-1; k--){
            if(nums[i]%nums[k]==0){
                let isBigger= [...data[k], nums[i]]; 
                if(isBigger.length>data[i].length){
                    data[i]= isBigger;
                    if(biggest.length<data[i].length){
                        biggest= data[i];
                    } 
                }
            }
        }          
    }
    return biggest;
};