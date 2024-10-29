let findLonely= function(nums){
    nums= nums.sort((a,b)=>{
        return a-b;
    });
    
    let data= [];
    for(let i= 0; i<nums.length;){
        if(nums[i]==nums[i+1]){    
            let k= i+2;        
            while(nums[k]-nums[i]<2){
                k++;
            }
            i= k;
        }
        else if(nums[i]+1==nums[i+1]){
            let k= i+2;  
            while(nums[k]-nums[i]<3){
                k++;
            }             
            i= k;           
        }
        else{
            if(nums[i-1]+1!=nums[i]){
                data.push(nums[i]);
                i++;
            }
            else{
                i++;
            }           
        }
    }
    return data;    
};