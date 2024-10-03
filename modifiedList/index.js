let modifiedList= function(nums, head){
    let hashTable= {};
    let ll= {head: {}};
    let current= ll.head;
    for(let i=0; i<nums.length; i++){
        if(hashTable[nums[i]]==undefined){
            hashTable[nums[i]]= nums[i];
        }
    }    
    while(head){
        if(hashTable[head.val]==undefined){
            if(head.next!=null){
                if(hashTable[head.next.val]==undefined){
                    current.val= head.val;
                    current.next= {};
                    current= current.next;    
                    head= head.next;
                }
                else{   
                    let curr= head.next.next==null ? head.next : head.next.next;      
                    while(curr){
                        if(hashTable[curr.val]==undefined){
                            break;
                        }
                        curr= curr.next;
                    } 
                    if(curr==null){
                        current.val= head.val;
                        current.next= null;
                        current= curr; 
                        head= current; 
                    } 
                    else{
                        current.val= head.val;
                        current.next= {};
                        current= current.next;  
                        head= curr; 
                    }
                }                                
            }
            else{
                current.val= head.val;
                current.next= null;
                current= current.next;  
                head= head.next;              
            }           
        } 
        else{
            head= head.next;
        }       
    }    
    return ll.head;    
};