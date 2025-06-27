let FindElements= function(root){    
    this.obj= {};
    this.root= root;  
    let iterator= this.root;
    let array= [iterator];
    let isIn= false;
    while(array.length>0){
        if(isIn){
            this.obj[array[0].val]= array[0].val;
            if(array[0].right!=null){
                if(array[0].left!=null){
                    array[0].right.val= (array[0].val*2)+2; 
                    array[0].left.val= (array[0].val*2)+1; 
                    array.push(array[0].right);
                    array.push(array[0].left);
                }
                else{
                    array[0].right.val= (array[0].val*2)+2; 
                    array.push(array[0].right);                  
                }
            }
            else if(array[0].left!=null){                
                array[0].left.val= (array[0].val*2)+1; 
                array.push(array[0].left);           
            } 
            array.shift();         
        }
        else{
            if(array[0].val==-1){
                this.obj[0]= 0;
                array[0].val= 0;
                if(array[0].right!=null){
                    if(array[0].left!=null){
                        array[0].right.val= (array[0].val*2)+2; 
                        array[0].left.val= (array[0].val*2)+1; 
                        array.push(array[0].right);
                        array.push(array[0].left);
                        isIn= true;
                    }
                    else{
                        array[0].right.val= (array[0].val*2)+2; 
                        array.push(array[0].right);       
                        isIn= true;           
                    }
                }
                else if(array[0].left!=null){
                    array[0].left.val= (array[0].val*2)+1; 
                    array.push(array[0].left);
                    isIn= true;
                }
                array.shift();
            }
            else{
                this.obj[array[0].val]= array[0].val;
                if(array[0].right!=null){
                    if(array[0].left!=null){
                        array.push(array[0].right);
                        array.push(array[0].left);
                    }
                    else{
                        array.push(array[0].right);              
                    }
                }
                else if(array[0].left!=null){
                    array.push(array[0].left);
                }
                array.shift();
            }            
        }        
    }
};

FindElements.prototype.find= function(target){
    return this.obj[target]!=undefined;    
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */