let deleteDuplicates= function(head){    
    let temp=head       
    while(temp){
        console.log(temp.val===(!temp.next? false : temp.next.val==temp.val ? temp.next.val : false))                                      
        if(temp.val===(!temp.next? false : temp.next.val==temp.val ? temp.next.val : false)){            
            temp.next=!temp.next? false : temp.next.next         
        }
        else{
            if(!temp.next){
                console.log(head)
                return head
            }
            else{
                temp=temp.next
            }
        }        
    }        
    return temp
}