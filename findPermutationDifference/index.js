let findPermutationDifference= function(s, t){
    let difference= 0;
    for(let i=0; i<s.length; i++){
        difference+= Math.abs(i-t.indexOf(s[i]));
    }
    return difference;
};