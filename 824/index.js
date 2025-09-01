let toGoatLatin= function(sentence){
    sentence= sentence.split(" ");
    for(let i= 0; i<sentence.length; i++){
        if("aeiouAEIOU".search(sentence[i][0])>-1){
            sentence[i]+= "ma";
        }
        else{
            sentence[i]= sentence[i].slice(1)+sentence[i][0]+"ma";
        }
        sentence[i]+= "a".repeat(i+1);
    } 

    return sentence.join(" ");
};