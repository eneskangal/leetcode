let insertGreatestCommonDivisors= function(head){
    const copyHead= head;
    while(head&&head.next){
        if(head.next!=null&&head.val>= head.next.val){
            for(let i=head.next.val; i>0; i--){
                if(head.val%i==0&&head.next.val%i==0){
                    head.next= {val: i, next: head.next};
                    head= head.next.next;
                    break;
                }
            }
        }
        else{
            for(let i=head.val; i>0; i--){
                if(head.next!=null&&head.next.val%i==0&&head.val%i==0){
                    head.next= {val: i, next:head.next}; 
                    head= head.next.next;                                                          
                    break;
                }
            }            
        }             
    }
    return copyHead;   
};