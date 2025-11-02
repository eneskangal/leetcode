let getTargetCopy= function(original, cloned, target){
    if(original==target){
        return cloned;
    }
    else{
        if(original.left!=null){
            if(original.right!=null){
                let left= getTargetCopy(original.left, cloned.left, target);
                let right= getTargetCopy(original.right, cloned.right, target);
                if(left){
                    return left;
                }
                else{
                    return right;
                }
            } 
            else{
                return getTargetCopy(original.left, cloned.left, target);
            }           
        }
        else if(original.right!=null){
            return getTargetCopy(original.right, cloned.right, target);
        }
        else{
            return 0;
        }
    }    
};