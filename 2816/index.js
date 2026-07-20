let doubleIt= function(head){
    let el= 0;
    let array= [];
    while(head){
        array.push(head.val);
        head= head.next;   
    }    

    let results= [];
    for(let i= array.length-1; i>-1; i--){
        if(((array[i]*2)+el)<10){
            results.unshift((array[i]*2)+el);
            el= 0;
        }   
        else{            
            if(i!=0){
                results.unshift((array[i]*2+el)%10);
                el= (((array[i]*2)+el).toString().slice(0,1))*1; 
            }       
            else{
                results.unshift((array[i]*2+el)%10);
                el= (((array[i]*2)+el).toString().slice(0,1))*1; 
                results.unshift(el);
            }            
        } 
    }
    let ll= {head:{}};
    let curr= ll.head;
    let lastIndex= results.length-1;
    for(let i= 0; i<results.length; i++){
        if(i==lastIndex){
            curr.val= results[i];
            curr.next= null;
            curr= curr.next;
        }
        else{
            curr.val= results[i];
            curr.next= {};
            curr= curr.next;
        }
    }
    return ll.head;       
};