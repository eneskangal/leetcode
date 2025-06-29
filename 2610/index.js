let findMatrix= function(nums){
    const array= [];
    for(let i=0; i<nums.length; i++){        
        if(array.length<1){
            array.push([nums[i]]);
        }
        else{
            for(let k=0; k<array.length; k++){             
                if(array[k].includes(nums[i])&&k==array.length-1){ 
                    array.push([nums[i]]);                 
                    break;
                }
                else if(array[k].includes(nums[i])==false){                    
                    array[k].push(nums[i]);
                    break;
                }                
            }            
        }
    }   
    return array; 
};