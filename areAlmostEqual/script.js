let areAlmostEqual= function(s1, s2){
    let count=0
    let harf
    let harf2
    for(let i=0; i<s1.length; i++){                  
        if(s1[i]!=s2[i]){            
            if(harf==undefined){
                count++
                harf=s1[i]
                harf2=s2[i]
            }
            else if(count>=1){
                if((harf!=undefined&&harf2!=undefined)&&(harf2!=s1[i]||harf!=s2[i])){
                    return false
                }
                else{
                    count++
                    harf=""
                    harf2=""
                }                                
            }
            else{
                count++
            }           
        }               
    }
    return count>1||s1==s2 ? true :false
}
console.log(areAlmostEqual("kelb","kelb"))