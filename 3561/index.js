let resultingString= function(s){
    let stack= [];
    for(let i= 0; i<s.length; i++){
        if(stack[0]!=undefined){
            let diff= Math.abs(stack[stack.length - 1].charCodeAt(0) - s[i].charCodeAt(0));
            let diff2= Math.abs(s[i].charCodeAt(0)-stack[stack.length - 1].charCodeAt(0));
            if(diff==1||diff2==25){
                stack.pop();
            } 
            else{
                stack.push(s[i]);                
            }           
        } 
        else{
            stack.push(s[i]);
        }       
    }
    return stack.join("");    
};