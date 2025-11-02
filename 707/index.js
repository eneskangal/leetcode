let MyLinkedList= function(){
    this.array= [];    
};


MyLinkedList.prototype.get= function(index){
    return this.array[index]==undefined ? -1 : this.array[index];
};


MyLinkedList.prototype.addAtHead= function(val){
    this.array.unshift(val);    
};

MyLinkedList.prototype.addAtTail= function(val){
    this.array.push(val);      
};

MyLinkedList.prototype.addAtIndex= function(index, val){
    if(index==0||this.array[index-1]!=undefined){
        this.array.splice(index, 0, val);   
    }   
};

MyLinkedList.prototype.deleteAtIndex= function(index){
    this.array.splice(index, 1);         
};