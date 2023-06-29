let isPrefixString= function(s, words){
    let kelime=s
    for(let i=0; i<words.length; i++){                   
        if(kelime.indexOf(words[i])==0){            
            kelime=kelime.replace(kelime.slice(kelime.indexOf(words[i]),kelime.indexOf(words[i])+
            words[i].length),"")
        }
        else{
            return kelime.length>0 ? false : true  
        }
    }
    return kelime.length>0 ? false : true   
}
console.log(isPrefixString("iloveleetcode",["i","love","leetcode","apples"]))