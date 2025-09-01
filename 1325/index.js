let removeLeafNodes= function(root, target){    
    if(root.left!=null){
        if(root.right!=null){
            let left= removeLeafNodes(root.left, target);      
            let right= removeLeafNodes(root.right, target);
            if(left==null){
                if(right==null){ 
                    root.left= null;                    
                    root.right= null;
                    if(root.val==target){
                        return null;
                    }
                    else{
                        return root;
                    }
                }
                else{
                    root.left= null; 
                    return root;
                }                               
            }
            else if(right==null){                  
                root.right= null;
                return root;
            }           
        }
        else{
            let left= removeLeafNodes(root.left, target);              
            if(left==null){
                root.left= null;
                if(root.val==target){
                    return null;
                }
                else{
                    return root;
                }                 
            }
            else{
                return root;
            }            
        }        
    }
    if(root.right!=null){ 
        let right= removeLeafNodes(root.right, target);   
        if(right==null){
            root.right= null;
            if(root.val==target){
                return null;
            }
            else{
                return root;
            } 
        }   
    }
    else{
        if(root.val==target){
            return null;
        }                
    } 
    return root;
};