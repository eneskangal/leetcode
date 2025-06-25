let removeNthFromEnd= function(head, n){
    let headCopy= head;
    let index= 0;
    while(headCopy){
        headCopy= headCopy.next;
        index++;
    }
    let remain= index-n;  
    index= 0;
    let newLL= {};
    let current= newLL;
    let lastCurrent;
    if(remain==0){
        head= head.next;
        return head;
    }
    while(head){
        if(index!=remain){
            if(head.next==null){
                lastCurrent= current;
                current.val= head.val;
                current.next= null;
                current= current.next;  
            }
            else{
                lastCurrent= current;
                current.val= head.val;
                current.next= {};
                current= current.next;  
            }
            index++;
            head= head.next;         
        }
        else{
            index++;
            head= head.next;
        }                
    }
    lastCurrent.next= null;
    return newLL;  
};