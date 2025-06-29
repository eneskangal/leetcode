let isPrefixString= function(s, words){
    let kelime=s
    for(let i=0; i<words.length; i++){
        console.log(kelime)            
        if(kelime.indexOf(words[i])==0){            
            kelime=kelime.replace(kelime.slice(kelime.indexOf(words[i]),kelime.indexOf(words[i])+words[i].length),"")
            console.log(kelime)
        }
        else{
            return kelime.length>0 ? false : true  
        }
    }
    return kelime.length>0 ? false : true   
}