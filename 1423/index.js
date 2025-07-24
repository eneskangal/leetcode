let maxScore= function(cardPoints, k){
    let firsts= [];     
    let lasts= [];
    let cardLength= cardPoints.length-1;
    let count= 0;
    for(let i= 0; i<k; i++){
        if(i==0){
            firsts.push(cardPoints[i]);
            lasts.push(cardPoints[cardLength]);
            cardLength--;
        }
        else{
            firsts.push(cardPoints[i]+firsts[count]);
            lasts.push(cardPoints[cardLength]+lasts[count]);
            cardLength--;
            count++;
        }
    }

    let index= k-1; 
    let index2= -1; 
    let max= -1;

    while(index>-1){
        if(index2==-1){
            if(max<firsts[index]){
                max= firsts[index];
            }            
        }
        else if(max<firsts[index]+lasts[index2]){
            max= firsts[index]+lasts[index2];
        }
        index--;
        index2++;
    }
    index2= k-1; 
    index= -1; 
    
    while(index2>-1){
        if(index==-1){
            if(max<lasts[index2]){
                max= lasts[index2];
            }            
        }
        else if(max<firsts[index]+lasts[index2]){
            max= firsts[index]+lasts[index2];
        }
        index++;
        index2--;
    }
    return max;
};