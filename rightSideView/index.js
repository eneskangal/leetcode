let rightSideView= function(root){
    if(root==null){
        return [];
    }
    let array= [];
    let nodes= [root];
    let levels= [0];
    let level= 0;
    let k= 0;
    while(nodes.length>0){
        if(array.length==0){
            array.push(nodes[0].val);
            if(nodes[0].right!=null){
                if(nodes[0].left!=null){
                    level++;                    
                    nodes.push(nodes[0].right);
                    nodes.push(nodes[0].left);
                    levels.push(level);
                    levels.push(level);
                    nodes.splice(0, 1);
                    k++;
                }
                else{
                    level++;   
                    nodes.push(nodes[0].right);
                    levels.push(level);
                    nodes.splice(0, 1);        
                    k++;         
                }                
            }
            else if(nodes[0].left!=null){ 
                level++;             
                nodes.push(nodes[0].left);
                levels.push(level);
                nodes.splice(0, 1);
                k++;
            } 
            else{  
                let bigArray= [];
                let stage= 0;
                for(let i= 0; i<array.length; i++){
                    if(levels[i]==stage){
                        bigArray.push(array[i]);
                        stage++;
                    }
                }
                return bigArray;               
            }            
        }
        else{
            array.push(nodes[0].val);            
            if(nodes[0].right!=null){                
                if(nodes[0].left!=null){
                    if(levels[k]!=level-1){
                        level++;
                    }
                    nodes.push(nodes[0].right);
                    nodes.push(nodes[0].left);
                    levels.push(level);
                    levels.push(level);                    
                    nodes.splice(0, 1);
                    k++;
                }
                else{
                    if(levels[k]!=level-1){
                        level++;
                    }
                    nodes.push(nodes[0].right);
                    levels.push(level);
                    nodes.splice(0, 1);        
                    k++;          
                }                
            }
            else if(nodes[0].left!=null){
                if(levels[k]!=level-1){
                    level++;
                }
                nodes.push(nodes[0].left);
                levels.push(levels[k]+1);
                nodes.splice(0, 1);
                k++;
            }
            else if(nodes.length==1){
                let bigArray= [];
                let stage= 0;
                for(let i= 0; i<array.length; i++){
                    if(levels[i]==stage){
                        bigArray.push(array[i]);
                        stage++;
                    }
                }
                return bigArray;
            } 
            else{
                if(levels[k+1]!=level-1){
                    level++;
                }
                nodes.splice(0,1);
                k++;
            }           
        }
    }
};