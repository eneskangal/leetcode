let hasCycle= function(head){
    let cycle= {};
    while(head){
        if(head.next!=undefined){
            if(cycle[head.next.val]==head.next){
                return true;
            }
        }   
        else{
            return false;
        }    
        cycle[head.val]= head;
        head= head.next;
    } 
    return false;   
};