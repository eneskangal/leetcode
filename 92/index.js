let reverseBetween= function(head, left, right){
    let array= [];
    while(head){
        array.push(head.val);
        head= head.next;
    } 

    let ll= {};
    let current= ll;
    let index= right-1;
    for(let i= 0; i<array.length; i++){
        if(left>i+1){
            current.val= array[i];
            current.next= {};
            current= current.next;
        }
        else if(right>=i+1){
            if(array[i+1]==undefined){
                current.val= array[index];
                current.next= null;
                current= current.next;    
                index--;            
            }
            else{
                current.val= array[index];
                current.next= {};
                current= current.next;
                index--;
            }
        }
        else{
            if(array[i+1]==undefined){
                current.val= array[i];
                current.next= null;
                current= current.next;                
            }
            else{
                current.val= array[i];
                current.next= {};
                current= current.next;
            }
        }
    }   
    return ll;
};