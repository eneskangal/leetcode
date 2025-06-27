let findOcurrences= function(text, first, second){
    let mergedTexts=first+" "+second
    let index=0
    let data=[]
    while(text.indexOf(mergedTexts,index)>-1){                  
        let kelime=""        
        let ilkBosluk=text.indexOf(" ",text.indexOf(mergedTexts,index)+mergedTexts.length+1)    
        let i=text.indexOf(mergedTexts,index)
        +mergedTexts.length+1
        if(ilkBosluk==-1){
            ilkBosluk=text.length
        }               
        if(text[text.indexOf(mergedTexts,index)-1]==" "||text.indexOf(mergedTexts,index)==0){
            console.log(i)
            for(i; i<ilkBosluk; i++){            
                kelime+=text[i]
            }
        }                        
        kelime.length==0 ?"n":data.push(kelime)     
        index=text.indexOf(mergedTexts,index)+first.length         
    }
    return data   
}