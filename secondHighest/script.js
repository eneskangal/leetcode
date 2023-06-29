let secondHighest= function(s){
    let data=["0","1","2","3","4","5","6","7","8","9"]
    let data2=[]
    for(let i=0; i<s.length; i++){        
        if(data.includes(s[i])){
            if(data2.includes(parseInt(s[i]))==false){
                data2.push(parseInt(s[i]))
            }           
        }
    }
    data2=data2.sort((a,b)=>{
        return b-a
    })    
    let indeksArray=data2[1]
    let filtreleme=data2.filter(t=>t==indeksArray)
    if(filtreleme.length==1){
        return indeksArray
    } 
    else{
        return -1
    }    
}
console.log(secondHighest("dfa12321afd"))