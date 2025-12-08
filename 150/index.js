let evalRPN= function(tokens){
    let stack= [];

    for(let i= 0; i<tokens.length; i++){
        if("+"==tokens[i]){
            stack.push(
                eval(
                    stack.pop()
                )+
                eval(
                    stack.pop()
                )
            );             
        }
        else if("-"==tokens[i]){
            let first= stack.pop();
            let second= stack.pop();
            stack.push(
                eval(
                    second
                )-
                eval(
                    first
                )
            );             
        }
        else if("/"==tokens[i]){
            let first= stack.pop();
            let second= stack.pop();
            stack.push(
                Math.trunc(
                    eval(
                        second/first
                    )
                )
            );         
        }
        else if("*"==tokens[i]){
            let first= stack.pop();
            let second= stack.pop();
            stack.push(
                Math.trunc(
                    eval(
                        second*first
                    )
                )
            );           
        }
        else{
            stack.push(tokens[i]);
        }
    }
    return eval(stack[0]);
};