/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index= 0;
    for(let i=0; i<t.length; i++){
        if(t[i]==s[index]){
            index++;
            if(index==s.length){
                return true;
            }
        }
    }
    return s=="" ? true : false;
};