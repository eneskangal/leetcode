let getHappyString= function(n, k){
    let answers= [];
    function backTrack(string, index, length){
        if(length>0){
            for(let i= 0; i<3; i++){
                if(i==0){
                    if(string[index]!="a"){
                        backTrack(string+"a", index+1, length-1);
                    }                  
                }
                else if(i==1){
                    if(string[index]!="b"){
                        backTrack(string+"b", index+1, length-1);
                    }
                }
                else{
                    if(string[index]!="c"){
                        backTrack(string+"c", index+1, length-1);
                    }
                }
            }
        }
        else{
            answers.push(string);
        }        
    }

    for(let i= 0; i<3; i++){
        if(i==0){
            backTrack("a",0, n-1);
        }
        else if(i==1){
            backTrack("b",0, n-1);
        }
        else{
            backTrack("c",0, n-1);
        }
    } 

    return answers[k-1]== undefined ? "" : answers[k-1];   
};