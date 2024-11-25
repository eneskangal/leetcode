let stringHash= function(s, k){
    let result= "";
    let alphabet= {
        "a": 0,
        "b": 1,
        "c": 2,
        "d": 3,
        "e": 4,
        "f": 5,
        "g": 6,
        "h": 7,
        "i": 8,
        "j": 9,
        "k": 10,
        "l": 11,
        "m": 12,
        "n": 13,
        "o": 14,
        "p": 15,
        "q": 16,
        "r": 17,
        "s": 18,
        "t": 19,
        "u": 20,
        "v": 21,
        "w": 22,
        "x": 23,
        "y": 24,
        "z": 25
    }; 

    let count= k;
    let sum= 0;
    for(let i= 0; i<s.length; i++){
        if(count>0){
            sum+= alphabet[s[i]];         
            if(count==1){
                result+= Object.keys(alphabet)[sum%26];
                sum= 0;
                count= k;
            }
            else{
                count--;
            }
        }
    } 
    return result;  
};