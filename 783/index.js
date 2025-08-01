let minDiffInBST= function(root){
    let values= [];
    let nodes= [root];

    while(nodes.length>0){
        values.push(nodes[0].val);
        if(nodes[0].left){
            if(nodes[0].right){
                nodes.push(nodes[0].left);
                nodes.push(nodes[0].right);
                nodes.shift();
            }
            else{
                nodes.push(nodes[0].left);
                nodes.shift();
            }
        }
        else if(nodes[0].right){
            nodes.push(nodes[0].right);
            nodes.shift();
        }
        else{
            nodes.shift();
        }
    }

    let min= 100001;

    values= values.sort((a,b)=>{
        return a-b;
    });
    
    for(let i= 1; i<values.length; i++){
        if(values[i]-values[i-1]<min){
            min= values[i]-values[i-1];
        }
    }

    return min;
};