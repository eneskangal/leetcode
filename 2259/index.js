let removeDigit= function(number, digit){
    let eski=number
    let sonuc="0"
    for(let i=number.length-1; i>-1; i--){
        number=eski        
        if(number[i]===digit){                      
            let kalan=number.split("")
            kalan.splice(i,1)           
            if(kalan>=sonuc){
                sonuc=kalan
            }
        }
    }
    return sonuc.join("")
}