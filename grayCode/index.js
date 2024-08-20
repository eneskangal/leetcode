let grayCode= function(n){
    let data= [];
    let obj= {};
    obj["0".repeat(n)]= "0".repeat(n);
    let last= "0".repeat(n);
    data.push(last);    
    while(data.length<2**n){
        let lastArray= last.split("");
        for(let i= n-1; i>-1; i--){            
            if(lastArray[i]=="0"){
                lastArray[i]= "1";
            }
            else{
                lastArray[i]= "0";
            }
            if(obj[lastArray.join("")]==undefined){
                obj[lastArray.join("")]= lastArray.join("");
                last= lastArray.join("");
                data.push(parseInt(lastArray.join(""),2));
                break;
            }
            if(obj[lastArray.join("")]!=undefined){
                if(lastArray[i]=="0"){
                    lastArray[i]= "1";
                }   
                else{
                    lastArray[i]= "0";
                }
                last= lastArray.join("");                
            }
        }
    }
    return data;
};