let mostWordsFound= function(sentences){
    let ilk=0
    let son=0
    let index=0 
    for(let i=0; i<sentences.length; i++){
        ilk=0
        index=0             
        while(sentences[i].indexOf(" ", index)!=-1){                        
            index=sentences[i].indexOf(" ", index)+1
            ilk++
        }
        if(ilk+1>=son){
            son=ilk+1
        }
        else{
            son=son
        }
    }
    return son    
}
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))