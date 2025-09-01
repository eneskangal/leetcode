let isCircularSentence= function(sentence){
    sentence= sentence.split(" ");   

    if(sentence[1]==undefined){
        let wordLength= sentence[0].length-1;
        return sentence[0][0]===sentence[0][wordLength];
    }

    for(let i= 0; i<sentence.length; i++){
        let wordLength= sentence[i].length-1;  
        if(i==sentence.length-1){
            let lastLength= sentence[i].length-1;
            return sentence[0][0]===sentence[i][lastLength];            
        }      
        else if(sentence[i][wordLength]===sentence[i+1][0]){
            
        }
        else{
            return false;
        }
    }  
};