let maxLengthBetweenEqualCharacters= function(s){
    let hash= {};

    for(let i= 0; i<s.length; i++){
        if(hash[s[i]]==undefined){
            hash[s[i]]= [i, i];
        }
        else{
            hash[s[i]][1]= i;
        }
    }

    let max= -1;
    for(let char in hash){
        max= Math.max(hash[char][1]-hash[char][0]-1, max);
    }

    return max;
};