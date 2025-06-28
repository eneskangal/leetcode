let deepestLeavesSum= function(root){
    let que= [root];
    let sum= 0;
    let levels= [0];
    for(let i= 0; 0<que.length;){
        if(que[i].left){
            if(que[i].right){
                que.push(que[i].left); 
                que.push(que[i].right);    
                levels.push(levels[i]+1); 
                levels.push(levels[i]+1); 
                que.shift(); 
                levels.shift(); 
                i= 0;
            }
            else{
                que.push(que[i].left);
                levels.push(levels[i]+1); 
                levels.shift();     
                que.shift();  
                i= 0;                
            }             
        }
        else if(que[i].right){
            que.push(que[i].right); 
            levels.push(levels[i]+1); 
            levels.shift();     
            que.shift(); 
            i= 0;
        }
        else{
            let isFalse= false;
            for(let k= i+1; k<que.length; k++){
                if(levels[i]!=levels[k]||que[k].left||que[k].right){
                    isFalse= true;
                    break;
                }
            }
            if(isFalse==false){
                sum+= que[i].val;
                que.shift(); 
                levels.shift(); 
                i= 0;                
            }
            else{
                que.shift(); 
                levels.shift(); 
                i= 0;                
            }
        }        
    }   
    return sum;
};