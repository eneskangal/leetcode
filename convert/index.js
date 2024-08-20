let convert= function(s, numRows){
    let combineArray= [];
    let index= 0;
    let is= "inc";
    if(numRows==1){
        return s;
    }
    for(let i= 0; i<s.length; i++){
        if(is=="inc"){
            if(index<numRows-1){
                if(!combineArray[index]){
                    combineArray[index]= [s[i]];
                    index++;
                }
                else if(combineArray[index]){
                    combineArray[index].push(s[i]);
                    index++;
                }
            }
            else if(index==numRows-1){
                if(!combineArray[index]){
                    combineArray[index]= [s[i]];
                    index--;
                    is= "dec";
                }
                else if(combineArray[index]){
                    combineArray[index].push(s[i]);
                    index--;
                    is= "dec";
                }
            }
        }
        else if(is=="dec"){
            if(index>0){
                if(!combineArray[index]){
                    combineArray[index]= [s[i]];
                    index--;
                }
                else if(combineArray[index]){
                    combineArray[index].push(s[i]);
                    index--;
                }
            }
            else if(index==0){
                if(!combineArray[index]){
                    combineArray[index]= [s[i]];
                    index++;
                    is= "inc";
                }
                else if(combineArray[index]){
                    combineArray[index].push(s[i]);
                    index++;
                    is= "inc";
                }
            }
        }
    }
    return combineArray.flat().join("");    
};