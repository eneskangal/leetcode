let NestedIterator= function(nestedList){   
    this.stack= [];
    let flatten= (list)=>{
        for(let i= list.length-1; i>-1; i--){
            if(list[i].isInteger()){
                this.stack.push(list[i].getInteger());
            }
            else{
                let current= list[i].getList();
                if(current!=null){                    
                    flatten(current);
                }
            }        
        }
    }
    flatten(nestedList);
};


NestedIterator.prototype.hasNext= function(){
    return this.stack.length>0;    
};

NestedIterator.prototype.next= function(){
    return this.stack.pop(); 
};