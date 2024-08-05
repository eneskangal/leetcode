let swapPairs= function(head){
    if(head==null){
        return head;
    }
    let obj= {["head"]: {}};
    let iter= obj.head;
    let count= 1;
    while(head){
        if(count%2==1){
            if(head.next==null){
                iter.val= head.val;
                iter.next= null;
                return obj.head;
            }
            else if(head.next.next==null){
                iter.val= head.next.val;
                iter.next= {val: head.val, next: null};
                return obj.head;
            }
            else{
                iter.val= head.next.val;
                iter.next= {val: head.val, next: null};
                iter= iter.next;
                head= head.next;
                count++;
            }            
        }
        else{
            iter.next= {};
            iter= iter.next;
            count++;
            head= head.next;
        }
    }
    return obj.head;    
};