let bstFromPreorder= function(preorder){
    let treeNode= {["root"]: null}; 

    for(let i= 0; i<preorder.length; i++){         
        if(i==0){
            treeNode["root"]= {"val": preorder[i], "right": null, "left": null};
        }
        else{
            let obj= {"val": preorder[i], "right": null, "left": null};
            let current= treeNode["root"];
            while(current){                                          
                if(current.val<preorder[i]){
                    if(current.right==null){
                        current.right= obj;
                        break;
                    }
                    current= current.right; 
                }
                else if(current.val>preorder[i]){
                    if(current.left==null){
                        current.left= obj;
                        break;
                    }
                    current= current.left; 
                }
            }
        }
    }
    return treeNode["root"];    
};