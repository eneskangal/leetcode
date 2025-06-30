var sumOfTheDigitsOfHarshadNumber = function(number) {
    let donecekDeger= 0;
    let base= number.toString().length-1;
    const unchangeNumber= number;
    while(number>0){
        donecekDeger+=Math.floor(number/10**base)
        number= number%10**base;
        base--
    }
    return unchangeNumber%donecekDeger==0 ? donecekDeger : -1;
};