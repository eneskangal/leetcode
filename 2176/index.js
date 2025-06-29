/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let countPairs= function(nums, k){
    let count= 0;
    const obj= {};
    for(let i=0; i<nums.length; i++){    
        if(obj[nums[i]]!=undefined){
            for(let j= 0; j<obj[nums[i]].length; j++){
                if((obj[nums[i]][j]*i)%k==0){                
                    count++;
                }
            }            
            obj[nums[i]].push(i);
        }
        else{
           obj[nums[i]]= [i]; 
        }
    }    
    return count;
};