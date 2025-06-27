let gcdOfStrings= function(str1, str2){
    let donecekKelime=""
    for(let i=1; i<str1.length+1; i++){
        if(str1.split(str1.slice(0,i)).some(t=>t!="")==false&&str2.split(str1.slice(0,i)).some(t=>t!="")==false){
            donecekKelime=str1.slice(0,i)
        }
    }
    return donecekKelime
}