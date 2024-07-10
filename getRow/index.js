let getRow= function(rowIndex){
    let data= [1];
    if(rowIndex==0){
        return data;
    }
    else{        
        for(let i= 0; i<rowIndex-0; i++){
            let fakeData= [];            
            for(let k=0; k<data.length+1; k++){        
                if(data[k-1]==undefined){
                    if(data[k]!=undefined){
                        fakeData.push(0+data[k]);
                    }                                      
                }
                else{
                    if(data[k]==undefined){
                        fakeData.push(0+data[k-1]);
                    }
                    else{
                        fakeData.push(data[k]+data[k-1]);
                    }
                }                
            }
            data= fakeData;
        }
        return data;
    }   
};