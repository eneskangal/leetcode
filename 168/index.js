let convertToTitle= function (columnNumber){
    const array= [];
    const alphabets= [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    let base= 1;
    let diff= 0;
    while(columnNumber>base*26+diff){
        if(diff==0){
            diff= 26;
        }
        else{
            diff*= 26;
        }   
        base*=26;              
    }   
    while(base>1){        
        if(columnNumber%base==0){
            array.push(alphabets[Math.floor(columnNumber/base)-2]);            
            columnNumber= base;     
            base/=26;       
        }
        else{
            if(columnNumber%base<base/26){
                array.push(alphabets[Math.floor(columnNumber/base)-2]);
                columnNumber= Math.floor(columnNumber%base)+base;
                base/=26;
            }
            else{
                array.push(alphabets[Math.floor(columnNumber/base)-1]);
                columnNumber= Math.floor(columnNumber%base); 
                base/=26;
            }         
        }        
    }
    array.push(alphabets[columnNumber-1]);
    return array.join("");       
};