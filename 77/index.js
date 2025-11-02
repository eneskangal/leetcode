let combine= function(n, k){
    let answers= [];
    function backTrack(array, limit, length){
        if(length<k){
            for(let i= limit; i<=n; i++){
                backTrack([...array, i], i+1, length+1);        
            }
        }
        else{
            answers.push(array);
        }
    }

    for(let i= 1; i<=n; i++){
        backTrack([i], i+1, 1);        
    }

    return answers;
};