let checkPowersOfThree= function(n){
    let data=[]
    while(n>2){        
        data.push(n%3)
        n=parseInt(n/3)
    }
    data.push(n)
    let datalar=data.filter(t=>t>1)
    if(datalar.length>=1){
        return false
    }
    else{
        return true
    }    
}
console.log(checkPowersOfThree(12))