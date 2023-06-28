let uncommonFromSentences= function(s1, s2){    
    let s1Array=s1.split(" ")
    let s2Array=s2.split(" ")      
    let data=[]
    let data2=[]    
    for(let i=0; i<s1Array.length; i++){
        if(s1Array.includes(s1Array[i],i+1)==false&&s2Array.includes(s1Array[i])==false&&data2.includes(s1Array[i])==false){
            data.push(s1Array[i])
        }
        else{
            data2.push(s1Array[i])
        }        
    }
    for(let k=0; k<s2Array.length; k++){
        if(s2Array.includes(s2Array[k],k+1)==false&&s1Array.includes(s2Array[k])==false&&data2.includes(s2Array[k])==false){
            data.push(s2Array[k])
        }
        else{
            data2.push(s2Array[k])
        }        
    }
    return data  
}
console.log(uncommonFromSentences("this apple is sweet","this apple is sour"))