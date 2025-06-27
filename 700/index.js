let searchBST= function(root, val){ 
    let bool;
    let boolTwo;    
    if(root==null){        
        return root;
    }
    else if(root.val==val){        
        return root;     
    }           
    if(root.left!=null){
        bool= searchBST(root.left, val);  
        if(bool!=null){
            return bool;
        }                                                                 
    }
    if(root.right!=null){
        boolTwo= searchBST(root.right, val);            
        if(boolTwo!=null){
            return boolTwo;
        }
        else{            
            return  null;
        }                       
    }                                 
};