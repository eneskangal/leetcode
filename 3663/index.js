let getLeastFrequentDigit= function(n){
    let newArray= new Array(10).fill(0);
    let translateString= n+"";

    for(let i= 0; i<translateString.length; i++){
        newArray[translateString[i]]++;
    }

    let max= 10000;
    let index= 0;
    for(let i= 0; i<10; i++){
        if(max>newArray[i]&&newArray[i]>0){
            max= newArray[i];
            index= i;
        }
    }
    return index;
};