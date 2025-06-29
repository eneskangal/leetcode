let executeInstructions= function(n, startPos, s){
    let answers= [];
    let copy= [...startPos];
    let copyPos= [...startPos];
    for(let i= 0; i<s.length; i++){        
        let count= 0;
        for(let k= i; k<s.length; k++){
            if(s[k]=="R"){
                if(copyPos[1]+1==n){                    
                    answers.push(count);
                    break;
                }
                else{
                    copyPos[1]+= 1;
                    count+= 1;
                }
            }
            else if(s[k]=="L"){
                if(copyPos[1]-1==-1){
                    answers.push(count);
                    break;
                }
                else{
                    copyPos[1]-= 1;
                    count+= 1;
                }
            }
            else if(s[k]=="U"){
                if(copyPos[0]-1==-1){
                    answers.push(count);
                    break;
                }
                else{
                    copyPos[0]-= 1;
                    count+= 1;
                }
            }
            else if(s[k]=="D"){
                if(copyPos[0]+1==n){
                    answers.push(count);
                    break;
                }
                else{
                    copyPos[0]+= 1;
                    count+= 1;
                }
            } 
        }
        if(answers[i]==undefined){
           answers[i]= count; 
        }
        copyPos= [...copy];              
    }
    return answers;    
};