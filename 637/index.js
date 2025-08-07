let averageOfLevels= function(root){
    let levels= [1];
    let roots= [root]; 
    let currentLevel= 1;
    let sum= 0;
    let results= [];
    let pieces= 0;
    while(levels[0]!=undefined){
        if(currentLevel==levels[0]){
            pieces++;
            if(roots[0].left!=null){
                if(roots[0].right!=null){
                    levels.push(levels[0]+1);    
                    levels.push(levels[0]+1);
                    roots.push(roots[0].left);    
                    roots.push(roots[0].right);     
                    sum+= roots[0].val;
                    levels.shift();
                    roots.shift();   
                } 
                else{ 
                    levels.push(levels[0]+1);
                    roots.push(roots[0].left);         
                    sum+= roots[0].val;
                    levels.shift();
                    roots.shift();
                }               
            }
            else if(roots[0].right!=null){   
                levels.push(levels[0]+1);    
                roots.push(roots[0].right);     
                sum+= roots[0].val;
                levels.shift();
                roots.shift();   
            }
            else{         
                sum+= roots[0].val;
                levels.shift();
                roots.shift();
            }                  
        }
        else if(currentLevel!=levels[0]){
            currentLevel+= 1;   
            results.push(sum/pieces);
            pieces= 1;
            sum= roots[0].val;
            if(roots[0].left!=null){
                if(roots[0].right!=null){
                    levels.push(levels[0]+1);    
                    levels.push(levels[0]+1);
                    roots.push(roots[0].left);    
                    roots.push(roots[0].right);     
                    levels.shift();
                    roots.shift();   
                } 
                else{ 
                    levels.push(levels[0]+1);
                    roots.push(roots[0].left);         
                    levels.shift();
                    roots.shift();
                }               
            }
            else if(roots[0].right!=null){   
                levels.push(levels[0]+1);    
                roots.push(roots[0].right);     
                levels.shift();
                roots.shift();   
            }
            else{         
                levels.shift();
                roots.shift();
            }                  
        }
    }
    results.push(sum/pieces);
    return results;
};