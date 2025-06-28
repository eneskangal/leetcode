let minOperations= function(boxes){
    let previouses= [];
    let nexts= [];
    let ones= [];
    let ones2= [];
    for(let i= 0; i<boxes.length; i++){
        if(i==0){
            if(boxes[i]==1){
                previouses[i]= 0;
                ones.push(1);
            }
            else{
                previouses[i]= 0;
            }
        }
        else{
            if(ones.length==0){
                if(boxes[i]==1){
                    previouses[i]= 0;
                    ones.push(1);
                }
                else{
                    previouses[i]= 0;
                }
            }
            else{
                if(boxes[i]==0){
                    previouses[i]= previouses[i-1]+ones.length;
                }
                else{
                    previouses[i]= previouses[i-1]+ones.length;
                    ones.push(1);
                }
            }
        }
    }

    let k= 0;
    for(let i= boxes.length-1; i>-1; i--){
        if(i==boxes.length-1){
            if(boxes[i]==1){
                nexts[k]= 0;
                ones2.push(1);
            }
            else{
                nexts[k]= 0;
            }
        }
        else{
            if(ones2.length==0){
                if(boxes[i]==1){
                    nexts[k]= 0;
                    ones2.push(1);
                }
                else{
                    nexts[k]= 0;
                }
            }
            else{
                if(boxes[i]==0){
                    nexts[k]= nexts[k-1]+ones2.length;
                }
                else{
                    nexts[k]= nexts[k-1]+ones2.length;
                    ones2.push(1);
                }
            }
        }
        k++;
    }   
    
    let returnValues= [];
    for(let i= 0; i<boxes.length; i++){
        returnValues[i]= previouses[i]+nexts[nexts.length-i-1];
    }
    return returnValues;
};