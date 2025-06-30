let maximumNumberOfStringPairs= function(words){
    let count= 0;
    const obj= {};
    for(let i=0; i<words.length; i++){
        if(obj[words[i]]){
            count++;
        }
        else{
            const split= words[i].split("");
            const reverse= split.reverse();
            const join= reverse.join("");
            obj[join]= join;
        }
    } 
    return count;   
};