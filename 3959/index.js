let checkGoodInteger= function(n){
    let convertStringN= n+"";
    let digitSum= 0;
    let squareSum= 0;

    for(let i= 0; i<convertStringN.length; i++){
        digitSum+= convertStringN[i]*1;
        squareSum+= (convertStringN[i]*1)**2;
    }   

    return squareSum-digitSum >= 50 ? true : false;
};