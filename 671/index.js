let findSecondMinimumValue= function(root){
    let hash= {};
    let roots= [root];
    let array= [];

    while(roots[0]!=undefined){
        if(hash[roots[0].val]==undefined){
            hash[roots[0].val]= true;
            array.push(roots[0].val);
        }
        if(roots[0].left!=null){
            if(roots[0].right!=null){
                roots.push(roots[0].left);
                roots.push(roots[0].right);
                roots.shift();
            }
            else{
                roots.push(roots[0].left);
                roots.shift();
            }
        }
        else if(roots[0].right!=null){
            roots.push(roots[0].right);
            roots.shift();
        }
        else{
            roots.shift();
        }
    }

    array= array.sort((a,b)=>{
        return a-b;
    });
    
    if(array[1]==undefined){
        return -1;
    }
    return array[1];
};