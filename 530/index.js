let getMinimumDifference= function(root){
    let roots= [root];
    let array= [];

    while(roots[0]!=undefined){     
        if(roots[0].left!=null){
            if(roots[0].right!=null){
                roots.push(roots[0].left);
                roots.push(roots[0].right);
                array.push(roots[0].val);
            }
            else{
                roots.push(roots[0].left);
                array.push(roots[0].val);
            }
        }
        else if(roots[0].right!=null){
            roots.push(roots[0].right);
            array.push(roots[0].val);
        }
        else{             
            array.push(roots[0].val);
        }
        roots.shift();       
    }   

    array= array.sort((a,b)=>{
        return a-b;
    });
    
    let min= 100001;
    for(let i= 0; i<array.length; i++){
        if(array[i+1]-array[i]<min){
            min= array[i+1]-array[i]; 
        }
    }

    return min;
};