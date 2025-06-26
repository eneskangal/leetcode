let thirdMax= function(nums){
    let third;
    let obj= {};
    let count= 0;
    let array= [];
    if(nums.length<3){
        return nums[nums.length-1];
    }
    else{        
        for(let i= 0; i<nums.length; i++){           
            if(!obj[nums[i]]){
                if(third==undefined){
                    third= nums[i];                               
                }                
                obj[nums[i]]= true; 
                array.push(nums[i]); 
                count++;                                
            }            
        }
        if(count<3){
            return Math.max(...nums);
        }
        let sortArray= array.sort((a,b)=>{return a-b});
        return sortArray[sortArray.length-3];
    }
    
};