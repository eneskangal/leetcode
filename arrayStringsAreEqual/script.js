let arrayStringsAreEqual= function(word1, word2){
    return word1.join("")===word2.join("")    
}
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))