let intToRoman= function(num){
    let figures= [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let hash= {
        "1": "I",
        "4": "IV",
        "5": "V",
        "9": "IX",
        "10": "X",
        "40": "XL",
        "50": "L",
        "90": "XC",
        "100": "C",
        "400": "CD",
        "500": "D",
        "900": "CM",
        "1000": "M"
    }
    let index= figures.length-1;
    let convert= "";
    while(num>0){
        if(figures[index]<=num){
            num-= figures[index];
            convert+= hash[figures[index]];
        }
        else{
            index--;
        }
    }
    return convert;
};