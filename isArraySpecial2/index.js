let isArraySpecial= function(nums, queries){
    let returnValues= [];
    let memo= {};
    for(let i=0; i<queries.length; i++){
        let isAlert= false;
        if(memo[`${queries[i][0]}+${queries[i][1]}`]!=undefined){
            returnValues.push(memo[`${queries[i][0]}+${queries[i][1]}`]);
        }
        else{
            for(let k= queries[i][0]; k<=queries[i][1]-1; k++){
                if(nums[k]%2==0){
                    if(nums[k+1]%2==0){
                        isAlert= true;
                        break;
                    }                
                }
                else{
                    if(nums[k+1]%2==1){
                        isAlert= true;
                        break;
                    }                 
                }
            }
            if(isAlert){
                returnValues.push(false);
                memo[`${queries[i][0]}+${queries[i][1]}`]=  false;                      
            }
            else{
                returnValues.push(true);
                memo[`${queries[i][0]}+${queries[i][1]}`]= true;  
            }
        }        
    }
    return returnValues;
};