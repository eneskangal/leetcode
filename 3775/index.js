let reverseWords= function(s){
    const vowels= new Set(['a', 'e', 'i', 'o', 'u']);
    const words= s.split(" ");

    const countVowels= (word) => {
        let count= 0;
        for(const ch of word){
            if(vowels.has(ch)) count++;
        }
        return count;
    };

    const target= countVowels(words[0]);

    for(let i= 1; i<words.length; i++){
        if(countVowels(words[i])===target){
            words[i]= words[i].split("").reverse().join("");
        }
    }
    return words.join(" ");
};