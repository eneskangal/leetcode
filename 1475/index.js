let finalPrices= function(prices){
    let answers= [];
    for(let i= 0; i<prices.length; i++){
        for(let k= i+1; k<prices.length; k++){
            if(prices[i]>= prices[k]){                
                answers.push(prices[i]-prices[k]);
                break;
            }
        }    

        if(answers[i]==undefined){
            answers[i]= prices[i];
        }        
    }   

    return answers;  
};