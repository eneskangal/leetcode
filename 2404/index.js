let mostFrequentEven= function(nums){
    let fres= {};
    let numbers= {};
    let max= 1;
    for(let i= 0; i<nums.length; i++){
        if(numbers[nums[i]]==undefined){
            if(fres[1]==undefined){
                fres[1]= {count: 1};
                fres[1][nums[i]]= 1;
                numbers[nums[i]]= 1;
            }
            else{
                fres[1][nums[i]]= 1;
                fres[1]["count"]+= 1;
                numbers[nums[i]]= 1;
            }
        }
        else{
            let level= numbers[nums[i]];
            if(fres[level+1]==undefined){
                fres[level+1]= {count: 1};
                fres[level+1][nums[i]]= level+1;
                numbers[nums[i]]+= 1;
                if(fres[level]["count"]==1){
                    delete fres[level];
                }
                else{
                    delete fres[level][nums[i]];
                    fres[level]["count"]-= 1;
                }
            }
            else{
                fres[level+1][nums[i]]= level+1;
                fres[level+1]["count"]+= 1;
                numbers[nums[i]]+= 1;
                if(fres[level]["count"]==1){
                    delete fres[level];
                }
                else{
                    delete fres[level][nums[i]];
                    fres[level]["count"]-= 1;
                }
            }
            if(max<level+1){
                max= level+1;
            }
        }
    }
    while(max>0){
        for(let value in fres[max]){
            if(value%2==0){
                return value*1;
            }
        }
        max--;
    }
    return -1;   
};