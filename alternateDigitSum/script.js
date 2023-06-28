let alternateDigitSum= function(n){
    let uzunluk=n+""
    let boolean=true
    let deger=n
    let toplam=0
    for(i=uzunluk.length-1; i>-1; i--){
        if(boolean){
            toplam=toplam+Math.floor(deger/10**i)
            deger=n%10**i
            boolean=false
        }
        else{
            toplam=toplam-Math.floor(deger/10**i)
            deger=n%10**i                      
            boolean=true
        }
    }
    return toplam   
}
console.log(alternateDigitSum(521))