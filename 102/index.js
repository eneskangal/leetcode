let levelOrder= function(root){
    if(root==null){
        return [];
    }
    let data= [root];
    let levels= [0];
    let trees= [];
    while(data.length>0){
        if(trees[levels[0]]==undefined){
            trees[levels[0]]= [data[0].val];
        } 
        else{
            trees[levels[0]].push(data[0].val);
        } 
        if(data[0].left!=null){
            if(data[0].right!=null){
                levels.push(levels[0]+1);   
                levels.push(levels[0]+1);  
                data.push(data[0].left);
                data.push(data[0].right);                              
                data.shift();    
                levels.shift();     
            }
            else{
                levels.push(levels[0]+1);   
                data.push(data[0].left);            
                data.shift();    
                levels.shift();     
            }            
        }
        else{ 
            if(data[0].right!=null){ 
                levels.push(levels[0]+1);  
                data.push(data[0].right);                
                data.shift();    
                levels.shift();     
            }
            else{          
                data.shift();    
                levels.shift();     
            }            
        }        
    }
    return trees;
};