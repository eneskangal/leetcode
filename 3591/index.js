let checkPrimeFrequency= function(nums){
    const primesUpTo100= {
        2: true,
        3: true,
        5: true,
        7: true,
        11: true,
        13: true,
        17: true,
        19: true,
        23: true,
        29: true,
        31: true,
        37: true,
        41: true,
        43: true,
        47: true,
        53: true,
        59: true,
        61: true,
        67: true,
        71: true,
        73: true,
        79: true,
        83: true,
        89: true,
        97: true
    };

    let hash= {};


    for(let i= 0; i<nums.length; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= 1;
        }
        else{
            hash[nums[i]]++;
        }
    }

    let isIn= false;
    for(let num in hash){
        if(primesUpTo100[hash[num]]==true){
            isIn= true;
            break;
        }
    }  

    return !isIn==false;
};