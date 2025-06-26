let wordPattern= function(pattern, s){
    let data=[]
    let splitArray=s.split(" ")
    let obje={}
    for(let i=0; i<splitArray.length; i++){
        console.log(obje, 1)                    
        if(obje[pattern[i]]){
            if(obje[pattern[i]]!=splitArray[i]){
                return false
            }            
        }        
        else if(obje[pattern[i]]===undefined){
            if(data.includes(splitArray[i])){
                return false
            }
            else{
                obje[pattern[i]]=splitArray[i]
                data.push(splitArray[i])  
            }        
        }
    }
    return splitArray.length==pattern.length ? true : false
}