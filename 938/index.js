let rangeSumBST= function(root, low, high){
    let que= [root];
    let sum= 0;
    while(que.length>0){
        if(que[0].left==null){
            if(que[0].right==null){
                if(que[0].val<=high&&low<=que[0].val){
                    sum+= que[0].val;
                }
                que.shift();            
            }
            else{
                if(que[0].val<=high&&low<=que[0].val){
                    sum+= que[0].val;
                }
                que.push(que[0].right);
                que.shift();                 
            }            
        }
        else if(que[0].left!=null){
            if(que[0].right!=null){
                if(que[0].val<=high&&low<=que[0].val){
                    sum+= que[0].val;
                }
                que.push(que[0].left);
                que.push(que[0].right); 
                que.shift();                                         
            }
            else{
                if(que[0].val<=high&&low<=que[0].val){
                    sum+= que[0].val;
                }
                que.push(que[0].left);
                que.shift();                  
            }            
        }
        else if(que[0].right!=null){
            if(que[0].val<=high&&low<=que[0].val){
                sum+= que[0].val;
            }
            que.push(que[0].right);
            que.shift();                           
        }              
    }    
    return sum;
};