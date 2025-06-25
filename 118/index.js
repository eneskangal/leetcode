let generate= function(numRows){
    let data= [[1]];
    if(numRows==1){
        return data;
    }
    else{
        for(let i= 1; i<numRows; i++){
            let subArray= [];
            for(let k= 0; k<data.length+1; k++){
                if(data[data.length-1][k-1]==undefined){
                    if(data[data.length-1][k]!=undefined){
                        subArray.push(0+data[data.length-1][k]);
                    }                                      
                }
                else{
                    if(data[data.length-1][k]==undefined){
                        subArray.push(0+data[data.length-1][k-1]);
                    }
                    else{
                        subArray.push(data[data.length-1][k]+data[data.length-1][k-1]);
                    }
                }
            }
            data.push(subArray);
        }
        return data;
    }    
};