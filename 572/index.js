let isSubtree= function(root, subRoot){
    let roots= [root];

    while(roots[0]!=undefined){ 
        if(roots[0].val==subRoot.val){
            let first= JSON.stringify(roots[0]);      
            let second= JSON.stringify(subRoot);     
            if(first==second){
                return true;
            }        
        }
        if(roots[0].left!=undefined){
            roots.push(roots[0].left);
            if(roots[0].right!=undefined){
                roots.push(roots[0].right);
                roots.shift();
            }
            else{
                roots.shift();
            }
        }
        else if(roots[0].right!=undefined){
            roots.push(roots[0].right);
            roots.shift();
        }
        else{
            roots.shift();
        }
  
    }    
    return false;
};