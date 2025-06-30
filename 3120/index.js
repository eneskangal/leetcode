/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let obj= {};
    let count= 0;
    for(let i=0; i<word.length;){
        if(obj[word[i]]){
            delete obj[word[i]];
            word= word.replaceAll(word[i],"");
            count++;
            i=0;
        }
        else if(word[i].charCodeAt(0)>96&&word[i].charCodeAt(0)<123){
            obj[word[i].toUpperCase()]= word[i].toUpperCase();
        }
        else if(word[i].charCodeAt(0)>64&&word[i].charCodeAt(0)<91){
            obj[word[i].toLowerCase()]= word[i].toLowerCase();
        }
        i++;
    }
    return count;
};