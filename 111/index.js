let minDepth= function(root, depth= 1){
    if(root==null){
        return 0;
    }
    if(root.left!=null){
        if(root.right!=null){
            let left= minDepth(root.left, depth+1);
            let right= minDepth(root.right, depth+1);
            if(left<right){
                return left;
            }
            return right;
        }
        else{
            let left= minDepth(root.left, depth+1);
            return left;
        }
    }
    else if(root.right!=null){        
        let right= minDepth(root.right, depth+1);
        return right;
    }
    else{
        return depth;
    }
};