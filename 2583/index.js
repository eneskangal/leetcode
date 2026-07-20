let kthLargestLevelSum= function(root, k){
    let roots= [root];
    let levels= [0]; 
    let results= [];  

    while(roots[0]!=undefined){
        if(results[levels[0]]==undefined){
            results[levels[0]]= roots[0].val;            
        }
        else{
            results[levels[0]]+= roots[0].val;               
        }
        if(roots[0].left!=undefined){
            if(roots[0].right!=undefined){
                roots.push(roots[0].left);
                roots.push(roots[0].right);
                levels.push(levels[0]+1);
                levels.push(levels[0]+1);
            }
            else{
                roots.push(roots[0].left);
                levels.push(levels[0]+1);             
            }           
        }
        else if(roots[0].right!=undefined){
            roots.push(roots[0].right);
            levels.push(levels[0]+1);
        }
        roots.shift();
        levels.shift();
    }
    results= results.sort((a,b)=>{
        return b-a;
    });

    return results[k-1]==undefined ? -1 : results[k-1];
};