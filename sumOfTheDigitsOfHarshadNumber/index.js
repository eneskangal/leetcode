let sumOfTheDigitsOfHarshadNumber= function(number) {
    let returnValue= 0;
    let base= number.toString().length-1;
    const unchangeNumber= number;
    while(number>0){
        returnValue+=Math.floor(number/10**base)
        number= number%10**base;
        base--
    }
    return unchangeNumber%returnValue==0 ? returnValue : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18));