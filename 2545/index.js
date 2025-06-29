let sortTheStudents= function(score, k){
    for(let i= score.length-1; i>-1; i--){
        let index= score.length-(i+1);
        for(let j= score.length-(i+2); j>-1; j--){
            if(score[index][k]>score[j][k]){
                let copy= score[index];
                score[index]= score[j];
                index= j;               
                score[j]= copy;                
            }
        }   
    }
    return score;
};