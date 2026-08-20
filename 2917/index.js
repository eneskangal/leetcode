let findKOr= function(nums, k){
    let number= new Array(32).fill(0);   

    for(let i= 0; i<nums.length; i++){
        let numtoString= nums[i].toString(2);
        let numberLength= 31;
        for(let i= numtoString.length-1; i>-1; i--){
            if(numtoString[i]==="1"){
                number[numberLength]= Math.min(k, number[numberLength]+1);                 
            }
            numberLength--;           
        }               
    } 
    
    for(let i= 31; i>-1; i--){
        if(number[i]==k){
            number[i]= "1";
        }
        else{
            number[i]= "0";
        }
    }

    return parseInt(number.join(""), 2);
};