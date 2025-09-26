let frequencySort= function(nums){
    let hash= {};
    let indexes= {};

    for(let i= 0; i<nums.length; i++){        
        if(indexes[nums[i]]==undefined){
            if(hash[1]==undefined){
                hash[1]= {count: 1, [nums[i]]: true};    
                indexes[nums[i]]= 1;
                
            }
            else{
                hash[1][nums[i]]= true; 
                hash[1]["count"]++; 
                indexes[nums[i]]= 1;           
            }
        }
        else{
            let index= indexes[nums[i]];
            if(hash[index+1]==undefined){
                hash[index+1]= {count: 1, [nums[i]]: true};    
                if(hash[index]["count"]==1){
                    delete hash[index];
                    indexes[nums[i]]+= 1;
                }
                else{
                    delete hash[index][nums[i]];
                    indexes[nums[i]]+= 1;                    
                }
            }
            else{
                hash[index+1][nums[i]]= true; 
                hash[index+1]["count"]++; 
                if(hash[index]["count"]==1){
                    delete hash[index];
                    indexes[nums[i]]+= 1;
                }
                else{
                    delete hash[index][nums[i]];
                    indexes[nums[i]]+= 1;                    
                }               
            }
        }     
    }  

    let array= [];
    for(let prop in hash){
        let subArray= [];
        for(let subPro in hash[prop]){
            if(subPro!="count"){
                for(let i= 0; i<prop; i++){
                    subArray.push([subPro]);
                }
            }         
        }
        subArray.sort((a,b)=>{
            return b-a;
        });
        array.push(...subArray.flat(3));
    }
    return array.map((x) => x * 1);
};