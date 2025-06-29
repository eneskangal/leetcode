let findOriginalArray= function(changed){
    let obj= {};
    changed= changed.sort((a,b)=>{
        return a-b;
    });
    let stack= [];
    for(let i= 0; i<changed.length; i++){
        if(obj[changed[i]]==undefined){
            if(obj[changed[i]*2]!=undefined){
                obj[changed[i]*2]+= 1;
            }
            else{
                obj[changed[i]*2]= 1;
            }
        }
        else{
            if(obj[changed[i]]==1){
                delete obj[changed[i]];
                stack.push(changed[i]/2);
            }
            else{
                obj[changed[i]]-= 1; 
                stack.push(changed[i]/2);               
            }
        }
    }
    if(stack.length*2==changed.length){
        return stack;
    }
    else{
        return [];
    }
};