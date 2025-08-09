let numRabbits= function(answers){
    let hash= {};
    let sum= 0;
    for(let i= 0; i<answers.length; i++){
        if(hash[answers[i]]==undefined){
            hash[answers[i]]= 1;
        } 
        else{
            hash[answers[i]]+= 1;
        }   
    }
    
    for(let answer in hash){
        sum+= (Math.ceil(hash[answer]/((answer*1)+1)))*((answer*1)+1);
    }

    return sum;
};