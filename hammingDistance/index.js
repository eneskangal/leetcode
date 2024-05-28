let hammingDistance= function(x, y){
    let count= 0;
    let xtoBinary= x.toString(2);
    let ytoBinary= y.toString(2);
    if(xtoBinary.length>ytoBinary.length){
        ytoBinary= ytoBinary.padStart(xtoBinary.length, "0");
    }
    else if(xtoBinary.length<ytoBinary.length){
        xtoBinary= xtoBinary.padStart(ytoBinary.length, "0");
    }
    for(let i=0; i<ytoBinary.length; i++){
        if(ytoBinary[i]!=xtoBinary[i]){
            count++;
        }
    }
    return count;
};