let deleteMiddle= function(head){
    let length= 0;
    let copyHead= head;
    let iterationHead= head;
    while(head){
        length++;
        head= head.next;
    }
    let middle;
    if(length%2==1){
        length--;
        middle= length/2;        
    }
    else{
        middle= length/2;
    }
    let count= 0;
    while(copyHead){
        if(count<middle-1){
            count++;
        }
        else{
            if(copyHead.next==null){
                return copyHead.next;
            }
            else{
                copyHead.next= copyHead.next.next;
            }
            break;
        }
        copyHead= copyHead.next;
    }
    return iterationHead; 
};