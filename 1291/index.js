let array= [];
function backtrack(stringNumber){
    array.push(stringNumber);
    if(stringNumber.at(-1)<9){
        backtrack(
            stringNumber.slice(1)
            +
            ((stringNumber.at(-1)*1)+1)
        );                        
    }
}
for(let i= 2; i<10; i++){
    let stringNumber= "";
    for(let k= 1; k<=i; k++){
        stringNumber+= k;
    }
    backtrack(stringNumber);
}    
let sequentialDigits= function(low, high){
    let results= [];
    for(let i= 0; i<array.length; i++){
        if(array[i]>=low){
            if(array[i]>high){
                return results;
            }
            else{
                results.push(array[i]*1);
            }
        }
    }
    return results;   
};