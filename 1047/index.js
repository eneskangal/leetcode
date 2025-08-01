let removeDuplicates= function(s){
    let count= 0;
    let stack= [];

    for(let i= 0; i<s.length; i++){
        if(i==0){
            stack.push(s[i]);
            count++;
        }
        else{
            if(stack[count-1]==s[i]){
                stack.pop();
                count--;
            }
            else{
                stack.push(s[i]);            
                count++;                    
            }            
        }
    }
    return stack.join("");   
};