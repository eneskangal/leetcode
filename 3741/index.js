let minimumDistance= function(nums){
    let hash= {};
    let distance= (10**6)+1;

    for(let i= 0; i<nums.length; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= [i];
        }
        else{
            if(hash[nums[i]].length==1){
                hash[nums[i]].push(i);                
            }
            else if(hash[nums[i]].length==2){
                let array= hash[nums[i]];
                let problem= Math.abs(array[0]-array[1])+Math.abs(array[1]-i)+Math.abs(i-array[0]);
                if(distance>problem){
                    distance= problem; 
                }
                hash[nums[i]].push(i);                
            }
            else{
                hash[nums[i]].shift();
                let array= hash[nums[i]];
                let problem= Math.abs(array[0]-array[1])+Math.abs(array[1]-i)+Math.abs(i-array[0]);
                if(distance>problem){
                    distance= problem; 
                }
                hash[nums[i]].push(i); 
            }
        }
    }

    return distance==1000001 ? -1 : distance;   
};