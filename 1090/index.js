let largestValsFromLabels= function(values, labels, numWanted, useLimit){
    for(let i= 0; i<values.length; i++){
        values[i]= {label: labels[i], value: values[i]};
    }    

    values= values.sort((a,b)=>{
        return b["value"]-a["value"];
    });

    let hash= {};    
    let i= 0;
    let sum= 0;
    while(numWanted>0&&i<values.length){
        if(useLimit==1){
            if(hash[values[i]["label"]]==undefined){
                hash[values[i]["label"]]= 1;
                sum+= values[i]["value"];
                i++;
                numWanted--;
            }
            else{
                i++;
            }
        }
        else{
            if(hash[values[i]["label"]]==undefined){
                hash[values[i]["label"]]= 1;
                sum+= values[i]["value"];
                i++;
                numWanted--;
            }
            else if(hash[values[i]["label"]]<useLimit){
                hash[values[i]["label"]]++;
                sum+= values[i]["value"];
                i++;
                numWanted--;
            }
            else{
                i++;
            }            
        }
    }
    return sum;
};