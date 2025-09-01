let maxDepth= function(root, depth= 1){
    if(root==null){
        return 0;
    }
    if(root.left!=null){
        if(root.right!=null){
            let left= maxDepth(root.left, depth+1);
            let right= maxDepth(root.right, depth+1);
            if(left>right){
                return left;
            }
            return right;
        }
        else{
            let left= maxDepth(root.left, depth+1);
            return left;
        }
    }
    else if(root.right!=null){        
        let right= maxDepth(root.right, depth+1);
        return right;
    }
    else{
        return depth;
    }
};