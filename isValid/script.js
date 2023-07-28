let isValid = function(s){
    let data=[]
    let openBrackets=["(","[","{"]
    let closeBrackets=[")","]","}"]
    if(s.length%2!=0){
        return false
    }
    for(let i=0; i<s.length; i++){
        if(openBrackets.includes(s[i])){
            let index=openBrackets.findIndex(t=>t==s[i])
            data.unshift(closeBrackets[index])
        }
        else if(closeBrackets.includes(s[i])&&data[0]!=s[i]){            
            return false            
        }
        else{
            data.shift()
        }
    }
    return data.length==0 ? true : false    
}
console.log(isValid("(]"))