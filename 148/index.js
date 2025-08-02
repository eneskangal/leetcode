let sortList= function(head){
    if(head==null){
        return null;
    }
    let array= [];
    while(head){
        array.push(head.val);
        head= head.next;
    }

    array= array.sort((a,b)=>{
        return a-b;
    });

    let index= 0;
    let ll= {};
    let current= ll;
    while(array[index]!=undefined){
        if(array[index+1]==undefined){
            current.val= array[index];
            current.next= null;
        }
        else{
            current.val= array[index];
            current.next= {};          
        }
        current= current.next;
        index++;
    }    
    return ll;
};