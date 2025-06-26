let removeElements= function(head, val){
    let copyHead= head;
    while(head){        
        if(head.val==val){
            if(head.next&&head.next.val==val){
                copyHead.next= copyHead.next.next;  
            }  
            else if(copyHead){
                copyHead= copyHead.next; 
                head= head.next;  
            }        
        }
        else if(head.next&&head.next.val==val){
            head.next= head.next.next;                                   
        }
        else{
            head= head.next;
        }        
    }  
    return copyHead;   
};