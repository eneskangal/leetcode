let isPossibleDivide= function(nums, k){
    if(nums.length%k!=0){
        return false;
    }
    else{
        nums= nums.sort((a,b)=>{
            return a-b;
        });
        let array= new Array();
        let index= 0;   
        let currentIndex= 0; 
        let limit= nums.length/k;
        for(let i= 0; i<nums.length; i++){     
            if(currentIndex>limit){
                return false;
            }       
            if(array[index]==undefined){
                array[index]= [nums[i]];
                currentIndex++;
            }
            else{
                if(array[index].length==k){                    
                    if(array[index+1]==undefined){
                        array[index+1]= [nums[i]]; 
                        index++;
                        currentIndex= index+1;
                    }
                    else if(nums[i-1]+1==nums[i]){
                        if(nums[i]-array[index+1][array[index+1].length-1]==1){
                            array[index+1].push(nums[i]); 
                            index++;
                            currentIndex= index+1;
                        }
                        else{
                            return false;
                        }                        
                    }
                    else if(nums[i-1]==nums[i]){
                        if(nums[i]-array[index+1][array[index+1].length-1]==1){
                            array[index+1].push(nums[i]); 
                            index++;
                            currentIndex= index+1;
                        }
                        else{
                            return false;
                        }
                    }                    
                    else{
                        return false;
                    }
                }
                else{
                    if(nums[i-1]+1==nums[i]){
                        array[index].push(nums[i]); 
                        currentIndex= index+1;
                    }
                    else if(nums[i-1]==nums[i]){ 
                        if(i==nums.length-1){
                            return false;
                        }
                        else{ 
                            if(array[currentIndex]==undefined){
                                array[currentIndex]= [nums[i]]; 
                                currentIndex++;
                            }
                            else{
                                if(nums[i]-array[currentIndex][array[currentIndex].length-1]==1){
                                    array[currentIndex].push(nums[i]); 
                                    currentIndex++;
                                }
                                else{
                                    return false;
                                }
                            }
                        }
                    }
                    else{
                        return false;
                    }                                       
                }
            }
        }
        return true;              
    }    
};