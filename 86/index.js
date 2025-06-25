let partition= function(head, x){
    if(head==null||head.next==null){
        return head;
    }
    let previousEL;
    let equalandLarger= {["head"]: {}};
    let smaller= {["head"]: {}};
    let iterEL= equalandLarger.head;
    let iterS= smaller.head;
    while(head){
        if(head.val<x){
            if(head.next==null){
                iterS.val= head.val;
                iterS.next= null;
            }            
            else{                
                iterS.val= head.val;
                iterS.next= {};
                iterS= iterS.next;               
            }  
        }
        else{
            if(head.next==null||(head.next.next==null&&head.next.val<x)){
                iterEL.val= head.val;
                iterEL.next= null;
            }
            else{
                iterEL.val= head.val;                
                iterEL.next= {};
                previousEL= iterEL;
                iterEL= iterEL.next;                 
            }            
        }
        head= head.next;
    }
    if(equalandLarger.head.val==undefined){
        return smaller.head;
    }   
    if(iterS.val==undefined){   
        iterS.val= equalandLarger.head.val;
        iterS.next= equalandLarger.head.next;
    }
    else{        
        if(previousEL!=undefined&&previousEL.next.val==undefined){
            previousEL.next= null;
        }         
        iterS.next= equalandLarger.head;
    }
    return smaller.head;
};