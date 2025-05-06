let isCompleteTree= function(root){
    let data= [root];
    let isFalse= false;
    while(data.length>0){
        if(data[0].left!=null){
            if(isFalse){
                return false;
            }
            else if(data[0].right!=null){
                data.push(data[0].left);
                data.push(data[0].right);  
                data.shift();              
            }
            else{
                isFalse= true;
                data.push(data[0].left);
                data.shift();  
            }            
        }
        else{
            if(data[0].right!=null){
                return false;          
            }
            else{
                if(data.length==1){
                    return true;
                }
                else{
                    if(data[1].left||data[1].right){
                        return false;
                    }
                    else{
                        data.shift();
                    }
                }             
            }
        }
    }
    return true;        
};