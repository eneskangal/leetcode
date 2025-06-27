let isUnivalTree= function(root){
    let bool, boolTwo;  
    if(root.left!=null&&root.left.val!=root.val){
        return false;
    }
    if(root.right!=null&&root.right.val!=root.val){
        return false;
    }
    if(true){
        if(root.left!=null){
            bool= isUnivalTree(root.left);
        }
        if(root.right!=null){
            boolTwo= isUnivalTree(root.right);
        }                 
        if(bool==false){
            return false;
        }
        if(boolTwo==false){
            return false;
        } 
        return true;  
    }
};