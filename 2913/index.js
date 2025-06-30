let sumCounts= function(nums){
    let sumCount= 0;
    for(let i=0; i<nums.length; i++){
        sumCount+= 1**2;
        const obj= {};
        obj[nums[i]]= nums[i];
        let count= 1;
        for(let k= i+1; k<nums.length; k++){
            if(obj[nums[k]]==undefined){
                count++;   
                sumCount+= count**2;             
                obj[nums[k]]= nums[k];                
            }
            else{
                sumCount+= count**2;   
            }            
        }        
    }    
    return sumCount;    
};