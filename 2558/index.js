/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k){
    for(let i=0; i<k; i++){
        let max= Math.max(...gifts);
        let index= gifts.indexOf(max);
        gifts[index]=  Math.floor(Math.sqrt(max));              
    }    
    return gifts.reduce((a,b)=>{
        return a+b;
    },0);
};