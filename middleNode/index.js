let middleNode= function(head){
    let length= 0;
    let copyHead= head;
    let count= 0;
    while(head){
        length++;
        head= head.next;
    }
    let middle;
    if(length%2==0){
        middle= length/2;
    }
    else{
        middle= Math.floor(length/2);
    }
     while(copyHead){
        if(middle==count){
            return copyHead;
        }
        count++;
        copyHead= copyHead.next;
    }
};