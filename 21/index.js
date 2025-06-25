let mergeTwoLists= function(list1, list2){
    const linkedList= {};    
    if(list1!=null&&list2==null){
        return list1;        
    }
    else if(list1==null&&list2!=null){
        return list2;
    }
    else if(list1==null&&list2==null){
        return list1;
    }
    else{        
        while(list1){
            if(list2==null){
                let curr= linkedList.head;
                while(curr.next){
                    curr= curr.next;
                }
                curr.next= list1;
                return linkedList.head;
            }
            else if(list1.val==list2.val){
                if(linkedList.head==null){                                        
                    linkedList.head= {};  
                    linkedList.head.val= list1.val;
                    linkedList.head.next= {val: list2.val, next: null};              
                }
                else{
                    let curr= linkedList.head;
                    while(curr.next){                        
                        curr= curr.next;                                             
                    } 
                    curr.next= {val: list1.val, next:{val: list2.val, next:null}};          
                }
                list1= list1.next;
                list2= list2.next;
            }
            else if(list1.val<list2.val){
                if(linkedList.head==null){                                        
                    linkedList.head= {};  
                    linkedList.head.val= list1.val;
                    list1= list1.next;           
                }
                else{
                    let curr= linkedList.head;
                    while(curr.next){
                        curr= curr.next;
                    }
                    curr.next= {val: list1.val, next:null};   
                    list1= list1.next;                 
                }                
            }
            else if(list1.val>list2.val){
                if(linkedList.head==null){                                        
                    linkedList.head= {};  
                    linkedList.head.val= list2.val;
                    list2= list2.next;           
                }
                else{
                    let curr= linkedList.head;
                    while(curr.next){
                        curr= curr.next;
                    }
                    curr.next= {val: list2.val, next:null};   
                    list2= list2.next;                 
                }                
            }
        }
        let curr= linkedList.head;
        while(curr.next){
            curr= curr.next;
        }
        curr.next= list2;
        return linkedList.head;                  
    }           
};