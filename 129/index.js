let sumNumbers= function(root, sum= 0){
    if(root.left!=null){
        if(root.right!=null){
            let left= sumNumbers(root.left, sum+root.val+"");  
            let right= sumNumbers(root.right, sum+root.val+""); 
            return left+right;     
        }  
        else{
            let left= sumNumbers(root.left, sum+root.val+"");  
            return left;
        }
              
    }
    if(root.right!=null){  
        let right= sumNumbers(root.right, sum+root.val+"");       
        return right;
    }  
    else{
        return parseInt(sum+root.val);      
    }     
};