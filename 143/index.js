let reorderList= function(head){
    let copyHead= head;
    let array= [];
    let count= 0;
    while(head){
        array.push(head.val);
        count++;
        head= head.next;

    } 
    let border= Math.round(count/2);
    for(let i= 0; i<border; i++){
        copyHead.val= array[i];
        if(i+1==border){
            if(array[i]!=array[count-1]){
                copyHead.next= {val: array[count-1], next: null};
            } 
            else{
                copyHead.next= null;
                copyHead= copyHead.next;
            }           
        }        
        else{
            copyHead.next= {val: array[count-1], next: {}};
            copyHead= copyHead.next.next;
        }        
        count--;
    }   
};