/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i=0; i<magazine.length; i++){      
        if(ransomNote.indexOf(magazine[i])>-1){
            ransomNote= ransomNote.replace(magazine[i], "");
        }                
    }
    return ransomNote=="";
};