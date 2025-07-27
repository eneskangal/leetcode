let getAllElements= function(root1, root2){
    let first= [root1];
    let values= [];
    let second= [root2];
    if(root1!=null){
        while(first.length>0){
            if(first[0].left!=undefined){
                if(first[0].right!=undefined){
                    values.push(first[0].val);
                    first.push(first[0].left);
                    first.push(first[0].right);
                    first.shift();
                }
                else{
                    values.push(first[0].val);
                    first.push(first[0].left);
                    first.shift();
                }
            }
            else if(first[0].right!=undefined){
                values.push(first[0].val);
                first.push(first[0].right);
                first.shift();
            }
            else{
                values.push(first[0].val);
                first.shift();
            }
        }
    }
    
    if(root2!=null){
        while(second.length>0){
            if(second[0].left!=undefined){
                if(second[0].right!=undefined){
                    values.push(second[0].val);
                    second.push(second[0].left);
                    second.push(second[0].right);
                    second.shift();
                }
                else{
                    values.push(second[0].val);
                    second.push(second[0].left);
                    second.shift();
                }
            }
            else if(second[0].right!=undefined){
                values.push(second[0].val);
                second.push(second[0].right);
                second.shift();
            }
            else{
                values.push(second[0].val);
                second.shift();
            }
        }
    }
    return values.sort((a,b)=>{
        return a-b;
    });
};