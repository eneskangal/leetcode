let averageOfSubtree= function(root){
    let count= 0;
    function DFS(root){
        if(root.left!=null){
            if(root.right!=null){
                let left= DFS(root.left); 
                let right= DFS(root.right);                
                let result= Math.trunc((left.val+root.val+right.val)/(left.subCount+1+right.subCount)); 
                if(result==root.val){
                    count++;
                    return {val: left.val+right.val+root.val, subCount: left.subCount+1+right.subCount};
                }  
                else{
                    return {val: left.val+right.val+root.val, subCount: left.subCount+1+right.subCount};
                }                 
            }
            else{
                let left= DFS(root.left); 
                let result= Math.trunc((left.val+root.val)/(left.subCount+1));
                if(result==root.val){
                    count++;
                    return {val: (left.val+root.val), subCount: left.subCount+1};
                }  
                else{
                    return {val: (left.val+root.val), subCount: left.subCount+1};
                }
            }
        }
        else if(root.right!=null){
            let right= DFS(root.right);  
            let result= Math.trunc((right.val+root.val)/(right.subCount+1)); 
            if(result==root.val){
                count++;
                return {val: (right.val+root.val), subCount: right.subCount+1};
            }  
            else{
                return {val: (right.val+root.val), subCount: right.subCount+1};
            }                     
        }
        else{
            count++;
            return {val: root.val, subCount: 1};
        } 
    }

    if(root.left!=null){
        if(root.right!=null){
            let left= DFS(root.left); 
            let right= DFS(root.right);  
            let result= Math.trunc((left.val+root.val+right.val)/(right.subCount+left.subCount+1));
            if(result==root.val){
                count++;
                return count;
            }  
            else{
                return count;
            }                 
        }
        else{
            let left= DFS(root.left,); 
            let result= Math.trunc((left.val+root.val)/(left.subCount+1));
            if(result==root.val){
                count++;
                return count;
            }  
            else{
                return count;
            }
        }                            
    } 
    else if(root.right!=null){
        let right= DFS(root.right);  
        let result= Math.trunc((right.val+root.val)/(right.subCount+1));  
        if(result==root.val){
            return count+1;
        }  
        else{
            return count;
        }
    } 
    else{
        return count+1;
    }
    return count;
};