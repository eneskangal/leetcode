let truncateSentence= function(s, k){
    s=s.split(" ")
    return s.slice(0,s.length-(s.length-k)).join(" ")   
}
console.log(truncateSentence("What is the solution to this problem",4))