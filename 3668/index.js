let recoverOrder= function(order, friends){
    let hash= {};
    let hash2= {};

    for(let i= 0; i<order.length; i++){
        hash[i+1]= order[i];
        hash2[order[i]]= i+1;
    }

    let answers= [];
    for(let i= 0; i<friends.length; i++){
        if(i==0){
            answers.push(friends[i]);
        }
        else{
            let isIn= false;
            for(let k= answers.length-1; k>-1; k--){
                if(hash2[answers[k]]<hash2[friends[i]]){
                    answers.splice(k+1, 0, friends[i]);
                    isIn= true;
                    break;
                }
            }
            if(isIn==false){
                answers.unshift(friends[i]);
            }
        }
    }
    return answers;
};