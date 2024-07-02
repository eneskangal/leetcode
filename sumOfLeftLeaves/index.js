let sumOfLeftLeaves= function(root){
    let sum= 0; 
    if(root.left){        
        if(root.left.left==null&&root.left.right==null){
            sum+= root.left.val;
        }
        else if(root.left.left!=null&&root.left.right==null){
            sum+= sumOfLeftLeaves(root.left);   
        }
        else if(root.left.left==null&&root.left.right!=null){
            sum+= sumOfLeftLeaves(root.left); 
        }
        else{
            sum+= sumOfLeftLeaves(root.left); 
        }         
    }
    if(root.right){
        sum+= sumOfLeftLeaves(root.right);
    }   
    return sum;    
};