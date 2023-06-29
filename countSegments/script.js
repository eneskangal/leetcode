let countSegments= function(s){    
    let splitArray=s.split(" ")    
    let data=[]    
    if(s.length==0){return 0}        
    data=splitArray.filter((t)=>{                        
        return t!=" "&&t!=""
    })
    return data.length          
}
console.log(countSegments("Hello, my name is John"))