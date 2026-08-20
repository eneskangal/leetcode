let minLengthAfterRemovals= function(s){
    let stack= [];

    for(let i= 0; i<s.length; i++){
        if(stack[0]==undefined){
            stack.push(s[i]);
        }
        else{
            if(stack.at(-1)!=s[i]){
                stack.pop();
            }
            else{
                stack.push(s[i]);
            }
        }
    }
    return stack.length;    
};