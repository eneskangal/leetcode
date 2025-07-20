let reverseDegree= function(s){
    const letters= {};
    const startCharCode = 'a'.charCodeAt(0);

    for(let i= 0; i<26; i++){
        const letter= String.fromCharCode(startCharCode + i);
        letters[letter]= 26 - i;
    }  
    
    let sum= 0;
    for(let i=0; i<s.length; i++){
        sum+= (i+1)*letters[s[i]];
    }
    return sum;
};