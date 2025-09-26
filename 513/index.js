let findBottomLeftValue= function(root, level= 0){
    if(root.left!=null){
        if(root.right!=null){
            let left= findBottomLeftValue(root.left, level+1);            
            let right= findBottomLeftValue(root.right, level+1);
            if(level==0){
                if(left.level>=right.level){
                    return left.val;
                }
                return right.val;
            }
            else{
                if(left.level>=right.level){
                    return left;
                }
                return right;                
            }            
        }
        else{
            if(level==0){
                return findBottomLeftValue(root.left, level+1)["val"];
            }
            else{
                return findBottomLeftValue(root.left, level+1);
            }
        }
    }     
    else if(root.right!=null){
        if(level==0){
            return findBottomLeftValue(root.right, level+1)["val"];
        }
        else{
            return findBottomLeftValue(root.right, level+1);
        }
    }
    else{
        if(level==0){
            return root.val
        }
        else{
            return {level: level, val: root.val};
        }
    }
};