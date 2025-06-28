/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr){
    let number= 0;
    let i=1;
    let initialValue= 0;
    while(arr.length>=i){
        for(let j=0; j<arr.length-(i-1); j++){
            number+= arr.slice(j, i+j).reduce((accumulator, currentValue)=>{return accumulator+currentValue}, initialValue);
        }
        i+=2;
    }
    return number;
};