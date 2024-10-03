let replaceWords= function(dictionary, sentence){
    let sentenceSplit= sentence.split(" ");   
    for(let i= 0; i<dictionary.length; i++){
        for(let k= 0; k<sentenceSplit.length; k++){
            if(sentenceSplit[k].indexOf(dictionary[i])==0){
                sentenceSplit[k]= dictionary[i];
            }            
        }
    } 
    return sentenceSplit.join(" ");
};