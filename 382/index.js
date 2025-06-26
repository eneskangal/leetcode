
let Solution= function(head){
    this.data= [];
    this.head= head;  
    this.copyHead= head;
    while(this.head||this.data.length==0){
        this.data.push(this.head.val);
        this.head= this.head.next;
    }  
    this.head= this.copyHead;    
};

Solution.prototype.getRandom= function(){       
    let random= Math.floor(Math.random()*this.data.length)
    if(random==0){
        return this.data[0];
    }
    return this.data[random]
};