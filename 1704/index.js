/**
 * @param {string} s
 * @return {boolean}
 */
let halvesAreAlike= function(s){
    let count= 0;
    let count2= 0;
    const wowels= {
        'a':1, 'e':1, 'i':1, 'o':1, 'u':1, 'A':1, 'E':1, 'I':1, 'O':1, 'U':1
    };
    for(let i=0; i<s.length/2; i++){
        if(wowels[s[i]]){
            count++;
        }
    }
    for(let i=s.length/2; i<s.length; i++){
        if(wowels[s[i]]){
            count2++;
        }
    }
    return count==count2;
};