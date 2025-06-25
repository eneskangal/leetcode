let groupAnagrams= function(strs){
    let mod= 10**10;
    let alphabet= {
        "a": 2,
        "b": 3,
        "c": 5,
        "d": 7,
        "e": 11,
        "f": 13,
        "g": 17,
        "h": 19,
        "i": 23,
        "j": 29,
        "k": 31,
        "l": 37,
        "m": 41,
        "n": 43,
        "o": 47,
        "p": 53,
        "q": 59,
        "r": 61,
        "s": 67,
        "t": 71,
        "u": 73,
        "v": 79,
        "w": 83,
        "x": 89,
        "y": 97,
        "z": 101
    };
    
    let obj= {};

    function convert(string){
        let num= 1;
        for(let i= 0; i<string.length; i++){
            num*= alphabet[string[i]];
        }
        return num%mod;
    }
    for(let i= 0; i<strs.length; i++){
        const result= convert(strs[i]);
        if(obj[result]==undefined){
            if(obj["indexes"]==undefined){
                obj["indexes"]= {};
                obj["indexes"][result]= [strs[i]]; 
                obj[result]= strs[i];          
            } 
            else if(obj["indexes"]!=undefined){
                obj["indexes"][result]= [strs[i]]; 
                obj[result]= strs[i];           
            }           
        }
        else{         
            obj["indexes"][result].push(strs[i]);
        }
    }
    return Object.values(obj["indexes"]);
};