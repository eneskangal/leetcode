let destroyTargets= function(nums, space){
    let hash= {};
    let max= {count: 0, root: 0};
    nums= nums.sort((a,b)=>{
        return a-b;
    });
    for(let i= 0; i<nums.length; i++){
        if(hash[nums[i]%space]==undefined){
            hash[nums[i]%space]= {count: 1, root: nums[i]};
            if(max.count<hash[nums[i]%space].count){
                max= hash[nums[i]%space];
            }
        }
        else{
            hash[nums[i]%space]["count"]+= 1;                  
            if(max.count<hash[nums[i]%space].count){
                max= hash[nums[i]%space];
            }
            else if(max.count==hash[nums[i]%space].count&&max.root>hash[nums[i]%space].root){
                max= hash[nums[i]%space];
            }      
        }
    }
    return max.root;    
};