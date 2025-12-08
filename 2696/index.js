let minLength= function(s){
    let stack= [];
    for(let i= 0; i<s.length; i++){
        if(s[1]==undefined){
            stack.unshift(s[i]);
        }
        else{
            while((stack[0]=='D'&&stack[1]=="C")||(stack[0]=='B'&&stack[1]=="A")){
                stack.shift();
                stack.shift();
            }
            stack.unshift(s[i]);
        }
    }    

    while((stack[0]=='D'&&stack[1]=="C")||(stack[0]=='B'&&stack[1]=="A")){
        stack.shift();
        stack.shift();
    }
    return stack.length;
};