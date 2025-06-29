let mergeNodes= function(head){
    let sum= 0;
    let isTrue= false;
    let ll= {head:{}};
    let iter= ll.head;
    while(head){
        if(head.val==0&&!isTrue){
            isTrue= true;
        }
        else if(head.val!=0&&isTrue){
            sum+= head.val;
        }
        else if(head.val==0&&isTrue){
            iter.val= sum;
            if(head.next==null){
                iter.next= null;
            }
            else{
                iter.next= {};
            }
            iter= iter.next;
            sum= 0;            
        }
        head= head.next;
    }
    return ll.head;    
};