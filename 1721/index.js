let swapNodes= function(head, k){
    let first= head;
    let second= head;
    let length= 0;
    let current= head;

    while(current){
        length++;
        current= current.next;
    }

    let firstK= head;
    for(let i= 1; i<k; i++){
        firstK= firstK.next;
    }

    let secondK= head;
    for (let i= 1; i<length-k+1; i++){
        secondK= secondK.next;
    }

    const temp= firstK.val;
    firstK.val= secondK.val;
    secondK.val= temp;
    return head;        
};