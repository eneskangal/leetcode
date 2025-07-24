let inorderTraversal= function(root){
    if(root==null){
        return [];
    }
    else{
        let numbers= [];
        if(root.left!=undefined){
            if(root.right!=undefined){
                let left= inorderTraversal(root.left);
                let right= inorderTraversal(root.right);
                numbers.push(...left);
                numbers.push(root.val);
                numbers.push(...right);                
                return numbers;
            }
            else{
                let left= inorderTraversal(root.left);
                numbers.push(...left);
                numbers.push(root.val);
                return [...numbers.flat(10)];
            }
        }
        else if(root.right!=undefined){
            let right= inorderTraversal(root.right);
            numbers.push(root.val);
            numbers.push(right);            
            return [...numbers.flat(10)];
        }
        else{
            return [root.val];
        }
    }   
};