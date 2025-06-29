/**
 * @param {string} s
 * @return {boolean}
 */
var checkString= function(s) {
    for(let i=1; i<s.length; i++){
        if(s[i]=="a"&&s[i-1]=="b"){
            return false;
        }
        else if(s[i]=="b"&&s[i+1]=="a"){
            return false;
        }
    }
    return true;
};