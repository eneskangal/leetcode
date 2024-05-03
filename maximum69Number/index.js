let maximum69Number= function(num){
    num= num.toString();
    const numsString= num.split("");
    for(let i=0; i<numsString.length; i++){
        if(numsString[i]=="6"){
            numsString[i]= "9";
            return numsString.join("")*1;
        }
    }
    return numsString.join("")*1;
};