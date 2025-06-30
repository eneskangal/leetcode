let clearDigits= function(s){
    let stack= [];
    for(let i= 0; i<s.length; i++){
        if("0123456789".includes(s[i])){
            stack.pop();
        }
        else{
            stack.push(s[i]);
        }
    }
    return stack.join("");    
};