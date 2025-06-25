let deleteDuplicates= function(head){
    let ll= {};
    let current= ll;
    let duplicate;
    let currentCopy= current;
    if(head==null){
        return null;
    }
    while(head){
        if(head.next!=null&&head.val==head.next.val){
            duplicate= head.val;            
            head= head.next;
        }
        else if(duplicate==head.val){
            duplicate= undefined; 
            head= head.next;
        }
        else{
            current.val= head.val;
            currentCopy= current;
            current.next= {};
            current= current.next;
            head= head.next;
        }
    }
    if(currentCopy.next==null){
        return null;
    }
    currentCopy.next= null;
    return ll;    
};