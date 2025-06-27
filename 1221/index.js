/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count= 0;
    let r= 0;
    for(let i=0; i<s.length; i++){
        if(s[i]=="R"){
            r++;
        }
        else if(s[i]=="L"){
            r--;
        }
        if(r==0){
            count++;
        }
    }
    return count;
};