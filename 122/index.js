let maxProfit= function(prices){
    let stack= prices[0];
    let result= 0;
    for(let i= 1; i<prices.length;){
        if(stack>=prices[i]){
            stack= prices[i];
            i++;
        }
        else if(stack<prices[i]){
            let k= i;
            while(stack<prices[k]){               
                stack= prices[k];
                k++;                
            }
            result+= stack-prices[i-1];            
            i= k; 
        }
    } 
    return result;   
};