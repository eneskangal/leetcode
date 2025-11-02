let vowelStrings= function(words, queries){
    let prefix= new Array(words.length).fill(0);

    for(let i= 0; i<words.length; i++){
        if("aeiou".includes(words[i][0])&&"aeiou".includes(words[i].at(-1))){
            if(i==0){
                prefix[i]+= +1;
            }
            else{
                prefix[i]= prefix[i-1]+1;
            }
        }
        else{
            if(i>0){
                prefix[i]= prefix[i-1];
            }
        }
    }

    let answers= [];
    for(let i= 0; i<queries.length; i++){
        if(queries[i][0]==0){
            answers.push(prefix[queries[i][1]]);
        }
        else{
            answers.push(prefix[queries[i][1]]-prefix[queries[i][0]-1]);
        }
    }

    return answers;
};