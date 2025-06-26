let oddEvenList= function(head){
    if(head==null){
        return head;
    }
    let even= {["head"]: {}};
    let iterEven= even.head;
    let odd= {["head"]:{}};
    let iterOdd= odd.head;
    let count= 1;
    while(head){
        if(count%2==0){         
            if(head.next==null||head.next.next==null){                
                iterEven.val= head.val;
                iterEven.next= null;
            }
            else{
                iterEven.val= head.val;
                iterEven.next= {};
                iterEven= iterEven.next;
            }
        }
        else{
            if(head.next==null||head.next.next==null){
                iterOdd.val= head.val;
                iterOdd.next= null;
            }
            else{
                iterOdd.val= head.val;
                iterOdd.next= {};
                iterOdd= iterOdd.next;
            }
        }
        head= head.next;
        count++;
    } 
    if(even.head.val==null){        
        return odd.head;
    }
    iterOdd.next= even.head;
    return odd.head; 
};