let rotateRight= function(head, k){
    if(head==null){
        return null;
    }

    let values= [];
    let count= 0;
    while(head){
        values.push(head);
        count++;
        head= head.next;        
    }

    k= k%count;
    let start= count-k;
    let ll= {};
    let current= ll;

    for(let i= start; i<count; i++){
        if(i+1==count){
            current.val= values[i].val;
            current.next= {};
            current= current.next;
        }
        else{
            current.val= values[i].val;
            current.next= {};
            current= current.next;
        }
    }
    for(let i= 0; i<start; i++){
        if(i+1==start){
            current.val= values[i].val;
            current.next= null;
        }
        else{
            current.val= values[i].val;
            current.next= {};
            current= current.next;
        }
    }    
    
    return ll;
};