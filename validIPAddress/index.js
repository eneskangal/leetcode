let validIPAddress= function(queryIP){
    let numbers= queryIP.split(".");
    let colons= queryIP.split(":");
    if(numbers.length>1){
        for(let i= 0; i<numbers.length; i++){
            if(numbers[i]==""){
                return "Neither";
            }
            else if(numbers[i][0]==0&&numbers[i].length>1){
                return "Neither";
            }
            else if(numbers[i]*1>=256){
                return "Neither";
            }
            else if(numbers[i].match(/[a-z]/g)!=null){
                return "Neither";
            }            
        }
        return numbers.length==4 ? "IPv4" : "Neither";
    } 
    else if(colons.length>1){
        for(let i= 0; i<colons.length; i++){
            if(!/^[0-9a-fA-F]+$/.test(colons[i])){
                return "Neither";
            }
            else if(colons[i].length>4){
                return "Neither";
            }
        }
        return colons.length==8 ? "IPv6" : "Neither";
    }
    return "Neither";   
};