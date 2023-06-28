let firstPalindrome= function(words){
    let donecek=""
    for(let i=0; i<words.length; i++){        
        let tersleme=words[i].split("").reverse().join("")        
        if(words[i]===tersleme){
            donecek=words[i]
            break
        }
    }
    return donecek    
}
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))