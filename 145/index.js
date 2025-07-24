let postorderTraversal= function(root){
    if(root==null){
        return [];
    }
    else{
        let numbers= [];
        if(root.left!=undefined){
            if(root.right!=undefined){
                let left= postorderTraversal(root.left);
                let right= postorderTraversal(root.right);
                numbers.push(...left);
                numbers.push(...right);
                numbers.push(root.val);
                return numbers;
            }
            else{
                let left= postorderTraversal(root.left);
                numbers.push(...left);
                numbers.push(root.val);
                return [...numbers.flat(10)];
            }
        }
        else if(root.right!=undefined){
            let right= postorderTraversal(root.right);
            numbers.push(right);
            numbers.push(root.val);
            return [...numbers.flat(10)];
        }
        else{
            return [root.val];
        }
    }   
};