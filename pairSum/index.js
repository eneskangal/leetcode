let pairSum= function(head){
    if(!head.next.next){
        return head.val+head.next.val;
    }
    let index= 0;
    let max;
    let twins= [];
    let fastHead= head.next.next;
    let arrayFill= false;
    let length= 2;
    while(head){        
        if(fastHead.next&&fastHead.next.next&&!arrayFill){
            fastHead= fastHead.next.next;
            twins.push(head.val);
            head= head.next;
            index++;
            length+= 2;
        }
        else if(fastHead.next&&!arrayFill){
            index++;
            fastHead= fastHead.next;
            twins.push(head.val);
            length+= 2;    
            head= head.next;        
        }
        else if(!arrayFill){
            index++;
            twins.push(head.val);
            arrayFill= true;
            head= head.next;
        }
        else{           
            if(max==undefined){
                max= twins[length-index-1]+head.val;
                head= head.next;
                index++;
            }
            else{
                if(max<twins[length-index-1]+head.val){
                    max= twins[length-index-1]+head.val;
                    head= head.next;
                    index++;
                }
                else{
                    head= head.next;
                    index++;
                }                
            }            
        }           
    }
    return max;    
};