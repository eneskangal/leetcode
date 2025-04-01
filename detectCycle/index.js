let detectCycle= function(head){
    let obj= {};
    while(head){
        if(head.isIn){
            return head;           
        }
        else{
            if(head.next==null){
                return head.next;
            }
            else{
                head.isIn= true;
                head= head.next;
            }
        }
    }
    return head;
};