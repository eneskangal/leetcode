let countNodes= function(root){    
    if(root==null){
        return 0;
    }
    else{
        let count= 1;
        let leaves= [root];
        while(true){
            if(leaves[0].left==null){
                return count;
            }
            else{
                count++;
                if(leaves[0].right==null){
                    return count;
                }
                else{
                    count++;
                    leaves.push(leaves[0].left);
                    leaves.push(leaves[0].right);
                    leaves.shift();
                }
            }
        }
    }
};