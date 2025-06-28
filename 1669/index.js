let mergeInBetween= function(list1, a, b, list2){
    let count= 0;
    let ll= {"head":{}};
    let iter= ll.head;
    while(list1){
        if(count<a){
            count++;
            iter.val= list1.val;
            iter.next= {};
            list1= list1.next;
            iter= iter.next;
        }
        else if(count<b+1){
            count++;
            list1= list1.next;
        }
        else if(list2!=null){
            iter.val= list2.val;
            iter.next= {};
            list2= list2.next;
            iter= iter.next;            
        }  
        else{
            iter.val= list1.val;
            if(list1.next!=null){
                iter.next= {};
            }     
            else{
                iter.next= null;
            }       
            list1= list1.next;
            iter= iter.next;            
        }      
    }    
    return ll.head;
};