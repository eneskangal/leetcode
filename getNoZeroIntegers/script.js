let getNoZeroIntegers= function(n){
    let sayı=n%2
    if(n%2==0){      
        if(n<10){
            return [n/2, n/2]
        }
        else if(n>9&&sayı%10!=0){
            return [sayı, sayı]
        }
        else{
            let sayı=1
            let sayı2=n-1
            while(true){
                if(sayı2%10!=0&&sayı%10!=0){
                    let index=sayı+""
                    let index2=sayı2+""
                    if(index.indexOf("0")==-1&&index2.indexOf("0")==-1){
                        return [sayı, sayı2]
                    }                    
                }
                sayı++
                sayı2--
            }
        }
    }
    else{
        let sayı=1
        let sayı2=n-1        
            while(true){
                let index=sayı+""
                let index2=sayı2+""
                if(index.indexOf("0")==-1&&index2.indexOf("0")==-1){
                    return [sayı, sayı2]
                }   
                sayı++
                sayı2--
            }        
    }      
}
console.log(getNoZeroIntegers(111))