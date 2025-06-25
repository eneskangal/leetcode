let levelOrderBottom = function(root){
    if(!root){
        return [];
    }
    let levels= [0];
    let nodes= [root];
    let array= [];
    while(nodes.length>0){
        if(array.length==0){
            array.push([nodes[0].val]);
            if(nodes[0].right){
                if(nodes[0].left){
                    nodes.push(nodes[0].right);  
                    nodes.push(nodes[0].left);     
                    levels.push(levels[0]+1);   
                    levels.push(levels[0]+1);               
                }
                else{
                    nodes.push(nodes[0].right);     
                    levels.push(levels[0]+1);     
                }                
            }
            else if(nodes[0].left){
                nodes.push(nodes[0].left);     
                levels.push(levels[0]+1);               
            }
            levels.splice(0,1);
            nodes.splice(0,1);
        }
        else{
            if(array[levels[0]]==undefined){
                array.push([nodes[0].val]);    
                if(nodes[0].right){
                    if(nodes[0].left){
                        nodes.push(nodes[0].right);  
                        nodes.push(nodes[0].left);     
                        levels.push(levels[0]+1);   
                        levels.push(levels[0]+1);               
                    }
                    else{
                        nodes.push(nodes[0].right);     
                        levels.push(levels[0]+1);     
                    }                
                }
                else if(nodes[0].left){
                    nodes.push(nodes[0].left);     
                    levels.push(levels[0]+1);               
                }
                levels.splice(0,1);
                nodes.splice(0,1);           
            }
            else{
                array[levels[0]].unshift(nodes[0].val);
                if(nodes[0].right){
                    if(nodes[0].left){
                        nodes.push(nodes[0].right);  
                        nodes.push(nodes[0].left);     
                        levels.push(levels[0]+1);   
                        levels.push(levels[0]+1);               
                    }
                    else{
                        nodes.push(nodes[0].right);     
                        levels.push(levels[0]+1);     
                    }                
                }
                else if(nodes[0].left){
                    nodes.push(nodes[0].left);     
                    levels.push(levels[0]+1);               
                }
                levels.splice(0,1);
                nodes.splice(0,1);   
            }            
        }                
    }
    return array.reverse();    
};