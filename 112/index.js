let hasPathSum= function(root, targetSum){
    if(root==null){
        return false;
    }
    if(root.left!=null){
        if(root.right!=null){
            let left= hasPathSum(root.left, targetSum-root.val); 
            let right= hasPathSum(root.right, targetSum-root.val);
            if(left){
                return true;
            }
            if(right){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            let left= hasPathSum(root.left, targetSum-root.val); 
            if(left){
                return true;
            }   
            else{
                return false;
            }         
        }
    }
    if(root.right!=null){
        let right= hasPathSum(root.right, targetSum-root.val); 
        if(right){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(targetSum-root.val==0){
            return true;
        }
        else{
            return false;
        }
    } 
};