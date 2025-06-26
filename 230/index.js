let kthSmallest= function(root, k){
    let data= [root];
    let numbers= [];
    while(data.length>0){
        if(data[0].left){
            if(data[0].right){
                data.push(data[0].left);            
                data.push(data[0].right);    
                numbers.push(data[0].val);
                data.shift();
            }
            else{
                data.push(data[0].left);               
                numbers.push(data[0].val);
                data.shift();
            }            
        }
        else{
            if(data[0].right){          
                data.push(data[0].right);    
                numbers.push(data[0].val);
                data.shift();
            }
            else{          
                numbers.push(data[0].val);
                data.shift();
            }            
        }
    }
    numbers= numbers.sort((a,b)=>{
        return a-b;
    });

    return numbers[k-1];
};