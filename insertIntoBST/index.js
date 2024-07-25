let insertIntoBST= function(root, val){
    if(root==null){
        root= {val: val, left:null, right:null};
    }
    if(root.val<val){
        if(root.right){
            root.right= insertIntoBST(root.right, val);            
        }
        else{
            root.right= {val: val, left:null, right:null};
        } 
    }
    else if(root.val>val){
        if(root.left){
            root.left= insertIntoBST(root.left, val); 
        }
        else{
            root.left= {val: val, left:null, right:null};
        }
    }    
    return root;
};