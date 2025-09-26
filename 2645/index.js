let addMinimum= function(word){
    let count= 0;
    for(let i= 0; i<word.length;){
        if(word[i]=="a"){
            if(word[i+1]=="b"){
                if(word[i+2]=="c"){
                    i+= 3;
                }
                else{
                    count+= 1;
                    i+= 2;
                }
            }
            else if(word[i+1]=="c"){
                count+= 1;
                i+= 2;
            }
            else{
                count+= 2;
                i++;
            }
            
        }
        else if(word[i]=="b"){
            if(word[i+1]=="c"){
                count+= 1;
                i+= 2;
            }
            else{
                count+= 2;
                i++;
            }
        }
        else if(word[i]=="c"){
            count+= 2;
            i++;
        }
    } 
    return count;   
};