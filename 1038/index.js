let bstToGst= function(root){
    function solve(root, sum){ 
        if(!root){
            return sum;
        }
        else{
            sum= solve(root.right, sum); 
            sum+= root.val;
            root.val= sum;
            sum= solve(root.left, sum); 
            return sum;
        }         
    }
    solve(root, 0);
    return root;
};