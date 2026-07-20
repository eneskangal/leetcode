let maxGoodNumber= function(nums){
    let max= 0;

    for(let i= 0; i<3; i++){
        for(let j= 0; j<3; j++){
            if(i!=j){
                for(let k= 0; k<3; k++){
                    if(i!=k&&j!=k){
                        let concat= nums[i].toString(2)+nums[j].toString(2)+nums[k].toString(2);
                        if(parseInt(concat,2)>max){
                            max= parseInt(concat,2);
                        }
                    }
                }                
            }        
        }        
    } 
    return max;  
};
