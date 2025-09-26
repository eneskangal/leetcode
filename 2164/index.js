let sortEvenOdd= function(nums){
    let increaseArray= [];
    let decreaseArray= [];

    for(let i= 0; i<nums.length; i++){
        if(i%2==0){
            increaseArray.push(nums[i]);
        }
        else{
            decreaseArray.push(nums[i]);
        }
    }

    decreaseArray.sort((a,b)=>{
        return b-a;
    });

    increaseArray.sort((a,b)=>{
        return a-b;
    });

    let bothArray= [];

    if(increaseArray.length>=decreaseArray.length){
        for(let i= 0; i<increaseArray.length; i++){
            if(decreaseArray[i]){
                bothArray.push(increaseArray[i]);
                bothArray.push(decreaseArray[i]);
            }
            else{
                bothArray.push(increaseArray[i]);                
            }
        }
    }

    else if(increaseArray.length<decreaseArray.length){
        for(let i= 0; i<decreaseArray.length; i++){
            if(increseArray[i]){
                bothArray.push(increaseArray[i]);
                bothArray.push(decreaseArray[i]);
            }
            else{
                bothArray.push(decreaseArray[i]);                
            }
        }
    }

    return bothArray;
};