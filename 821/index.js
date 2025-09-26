let shortestToChar= function(s, c){
    let array= [];

    for(let i= 0; i<s.length; i++){
        if(c==s[i]){
            array.push(i);
        }
    }    

    let index= 0;
    let answers= [];
    for(let i= 0; i<s.length; i++){
        if(array[index]==i){
            answers.push(0);
            index++;
        }
        else{            
            if(index==0){
                answers.push(Math.abs(array[index]-i));
            }
            else{
                if(Math.abs(array[index-1]-i)>Math.abs(array[index]-i)){
                    answers.push(Math.abs(array[index]-i));
                }
                else{
                    answers.push(Math.abs(array[index-1]-i));
                }
            }
        }
    }
    return answers;
};