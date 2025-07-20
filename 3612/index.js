let processStr= function(s){
    let stack= [];
    for(let i= 0; i<s.length; i++){
        if(s[i]=="#"){
            stack.push(...stack);
        }
        else if(s[i]=="%"){
            stack= stack.reverse();
        }
        else if(s[i]=="*"){
            stack.pop();
        }
        else{
            stack.push(s[i]);
        }
    } 
    return stack.join(""); 
}