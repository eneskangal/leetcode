let levelOrder= function(root){
    let array= [];
    let roots= [root];
    let levels= [0];

    while(roots[0]!=undefined){
        if(levels[0]==0){
            array[levels[0]]= [roots[0].val];
            roots.push(roots[0].children);
            levels.push(levels[0]+1);                          
            roots.shift();
            levels.shift();
        }
        else{
            for(let i= 0; i<roots[0].length; i++){                
                if(roots[0][i].children.length>0){
                    if(array[levels[0]]==undefined){
                        array[levels[0]]= [roots[0][i].val];
                        roots.push(roots[0][i].children);
                        levels.push(levels[0]+1);                          
                    }
                    else{
                        array[levels[0]].push(roots[0][i].val); 
                        roots.push(roots[0][i].children);
                        levels.push(levels[0]+1);                               
                    }
                }
                else{
                    if(array[levels[0]]==undefined){
                        array[levels[0]]= [roots[0][i].val];                         
                    } 
                    else{
                        array[levels[0]].push(roots[0][i].val);                         
                    }                   
                }
            }       
            roots.shift();
            levels.shift();  
        }        
    } 

    return array;  
};