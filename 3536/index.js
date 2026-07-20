let maxProduct= function(n){
    let convertString= n+"";
    let toArray= convertString.split("");

    let array= toArray.sort();

    return array.at(-1)*array.at(-2);

};