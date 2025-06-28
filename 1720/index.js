/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const array= [first];
    for(let i=0; i<encoded.length; i++){
        array.push(encoded[i]^array[i])
    }
    return array;
};