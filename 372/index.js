/**
 * @param {number} a    //the base
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    let bInt = BigInt(b.join(""));  //the exponent
    let m = 1337;   //modules
    let res = 1;    //result

    a = a % m;
    while (bInt > 0){
        if (bInt % 2n == 1) res = (res * a) % m;
        a = (a * a) % m;
        bInt = bInt >> 1n;
    }
    return res;
};