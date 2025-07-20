let preorderTraversal= function(root){
    if(root==null){
        return [];
    }
    else{
        let numbers= [root.val];
        if(root.left!=undefined){
            if(root.right!=undefined){
                let left= preorderTraversal(root.left);
                let right= preorderTraversal(root.right);
                numbers.push(...left);
                numbers.push(...right);
                return numbers;
            }
            else{
                let left= preorderTraversal(root.left);
                numbers.push(...left);
                return numbers;
            }
        }
        else if(root.right!=undefined){
            let right= preorderTraversal(root.right);
            numbers.push(right);
            return [...numbers.flat(10)];
        }
        else{
            return numbers;
        }
    }   
};