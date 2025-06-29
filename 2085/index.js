let countWords= function(words1, words2){
    let count=0
    for(let i=0; i<words2.length; i++){
        let birKezMi2=words2.filter(t=>t==words2[i])
        let birKezMi=words1.filter(t=>t==words2[i])
        console.log(birKezMi)            
        if(birKezMi.length==1&&birKezMi2.length==1){
            count++
        }          
    }
    return count    
}