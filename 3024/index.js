let triangleType= function(nums){
    if(nums[0]==nums[1]&&nums[1]==nums[2]){       
        return "equilateral";                   
    }
    else if(nums[0]!=nums[1]&&nums[1]!=nums[2]&&nums[0]!=nums[2]){
        if(nums[0]>nums[1]){
            if(nums[0]>nums[2]){
                if(nums[0]< nums[1]+nums[2]){
                    return "scalene";
                }
                else{
                    return "none";
                }
            }
            else{
                if(nums[2]< nums[0]+nums[1]){
                    return "scalene";
                }
                else{
                    return "none";
                }                
            }
        }
        else{
            if(nums[1]>nums[2]){
                if(nums[1]< nums[0]+nums[2]){
                    return "scalene";
                }
                else{
                    return "none";
                }
            }
            else{
                if(nums[2]< nums[0]+nums[1]){
                    return "scalene";
                }
                else{
                    return "none";
                }                
            }            
        }
    }
    else{
        if(nums[0]==nums[1]){
            if(nums[2]>=nums[0]*2){
                return "none";
            } 
            return "isosceles";                 
        } 
        else if(nums[0]==nums[2]){
            if(nums[1]>=nums[0]*2){
                return "none";
            } 
            return "isosceles";               
        } 
        else if(nums[1]==nums[2]){
            if(nums[0]>=nums[2]*2){
                return "none";
            } 
            return "isosceles";                        
        }       
    }    
};