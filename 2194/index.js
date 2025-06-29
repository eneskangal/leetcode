/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let array= [];
    if(s[1]==s[4]){
        for(let i=0; i<=s[3].charCodeAt(0)-s[0].charCodeAt(0); i++){
            array.push(String.fromCharCode(s[0].charCodeAt(0)+i)+s[1]);
        }
    }
    else{
        for(let i=0; i<=s[3].charCodeAt(0)-s[0].charCodeAt(0); i++){
            for(let k=s[1]; k<=s[4]; k++){
                array.push(String.fromCharCode(s[0].charCodeAt(0)+i)+k);
            }
        }
        
    }
    return array;
};