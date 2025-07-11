let getGoodIndices= function(variables, target){
    let stack= [];
    for(let i=0; i<variables.length; i++){
        let variable1= BigInt(variables[i][0]);
        let variable2= BigInt(variables[i][1]);
        let variable3= BigInt(variables[i][2]);
        let variable4= BigInt(variables[i][3]);
        target= BigInt(target);
        if((((variable1**variable2)%10n)**variable3)%variable4==target){
            stack.push(i);
        }
    }
    return stack;    
};