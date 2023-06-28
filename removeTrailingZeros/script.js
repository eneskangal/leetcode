let removeTrailingZeros= function(num){
    num=num.split("")    
    for(let i=num.length-1; i-1; i--){
        if(num[i]!=0){
            return num.join("")
        }
        else{
            num.splice(i,1)
        }
    } 
}
console.log(removeTrailingZeros("51230100"))