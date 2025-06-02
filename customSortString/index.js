let customSortString= function(order, s){
    let stack= new Array(order.length);
    let string= "";
    let obj= {};
    for(let i= 0; i<order.length; i++){
        obj[order[i]]= i;
    }
    for(let i= 0; i<s.length; i++){
        if(obj[s[i]]==undefined){
            string+= s[i];
        }
        else{            
            if(stack[obj[s[i]]]==undefined){
                stack[obj[s[i]]]= s[i];
            }
            else{
                stack[obj[s[i]]]= stack[obj[s[i]]]+s[i];
            }
        }        
    } 
    return stack.join("")+string;
};