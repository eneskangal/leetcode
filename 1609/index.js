let isEvenOddTree= function(root, level= 0, hash= {}){
    if(true){       
        if(hash[level]==undefined){
            if(level%2==0&&root.val%2==1){
                hash[level]= [root.val];
            }
            else if(level%2==1&&root.val%2==0){
                hash[level]= [root.val];
            } 
            else{
                return false;
            }           
        }
        else{
            if(level%2==0){
                if(hash[level].at(-1)<root.val&&root.val%2==1){
                    hash[level].push(root.val);
                }
                else{
                    return false;
                }
            }
            else{
                if(hash[level].at(-1)>root.val&&root.val%2==0){
                    hash[level].push(root.val);
                }
                else{
                    return false;
                }
            }
        }
        if(root.left!=null){        
            if(root.right!=null){                
                let left= isEvenOddTree(root.left, level+1, hash);
                let right= isEvenOddTree(root.right, level+1, hash); 
                if(left==false){
                    return false;
                }
                else if(right==false){
                    return false;
                }
                           
            }
            else{
                let left= isEvenOddTree(root.left, level+1, hash);
                if(left==false){
                    return false;
                }
            }
        }
        else if(root.right!=null){
            let right= isEvenOddTree(root.right, level+1, hash);
            if(right==false){
                return false;
            }         
        }
        else{
            return true;
        }
    }    
    if(level==0){
        return true;
    }    
};