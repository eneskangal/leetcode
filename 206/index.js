let reverseList= function(head){
    let reverseLinkedList= {}
    while(head){
        if(reverseLinkedList.val==undefined){
            if(head.next==null){
                reverseLinkedList= {head:{val: head.val, next:head.next}};
            }
            else{
                reverseLinkedList.val= head.val;
                reverseLinkedList.next= null;              
            }
        }
        else{
            if(head.next==null){
                reverseLinkedList= {head:{val:head.val,next:{val:reverseLinkedList.val, next:reverseLinkedList.next}}}
            }
            else{
                reverseLinkedList= {val:head.val,next:{val:reverseLinkedList.val, next:reverseLinkedList.next}}
            }
        }
        head= head.next;
    }
    if(reverseLinkedList.head==undefined){
        return null;
    }
    return reverseLinkedList.head;       
};