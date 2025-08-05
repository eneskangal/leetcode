let largestValues= function(root){
    let levels= [1]; 
    let roots= [root];
    let hash= {};
    let maxes= [];
    if(root==null){
        return maxes;
    }
    while(levels[0]!=undefined){
        if(hash[levels[0]]==undefined){
            hash[levels[0]]= {values: [roots[0].val]};
            if(roots[0].left==null){
                if(roots[0].right==null){
                    levels.shift();
                    roots.shift();                
                }
                else{
                    roots.push(roots[0].right);
                    levels.push(levels[0]+1);
                    roots.shift();                    
                    levels.shift();
                }                
            }
            else{
                if(roots[0].right==null){
                    roots.push(roots[0].left);
                    roots.shift();
                    levels.push(levels[0]+1);
                    levels.shift();                
                }
                else{
                    roots.push(roots[0].left);
                    roots.push(roots[0].right);
                    roots.shift();
                    levels.push(levels[0]+1);
                    levels.push(levels[0]+1);
                    levels.shift();  
                }
            }                        
        }
        else{
            hash[levels[0]]["values"]= [...hash[levels[0]]["values"], roots[0].val];
            if(roots[0].left==null){
                if(roots[0].right==null){
                    levels.shift();
                    roots.shift();                
                }
                else{
                    roots.push(roots[0].right);
                    roots.shift();
                    levels.push(levels[0]+1);
                    levels.shift();
                }                
            }
            else{
                if(roots[0].right==null){
                    roots.push(roots[0].left);
                    roots.shift();
                    levels.push(levels[0]+1);
                    levels.shift();                
                }
                else{
                    roots.push(roots[0].left);
                    roots.push(roots[0].right);
                    roots.shift();
                    levels.push(levels[0]+1);
                    levels.push(levels[0]+1);
                    levels.shift();  
                }
            } 
        }
    } 
    
    for(let level in hash){
        let max= Math.max(...hash[level]["values"]);
        maxes.push(max);
    }

    return maxes;
};