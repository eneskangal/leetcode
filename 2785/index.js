var sortVowels= function(s){
    s= s.split("");
    let vowels= {
        "a": 6,
        "e": 7,
        "i": 8,
        "o": 9,
        "u": 10,
        "A": 1,
        "E": 2,
        "I": 3,
        "O": 4,
        "U": 5
    };   
    let sortingS= [];
    let indexes= []; 
    for(let i= 0; i<s.length; i++){
        if(vowels[s[i]]!=undefined){   
            indexes.push(i);
            sortingS.push(s[i]);
        }        
    }
    sortingS= sortingS.sort();
    for(let i= 0; i<sortingS.length; i++){
        s[indexes[i]]= sortingS[i];
    }
    return s.join("");
};