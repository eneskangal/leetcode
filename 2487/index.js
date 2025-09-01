let removeNodes= function(head){
    let array= [];
    let count= 0;
    while(head){
        if(array[0]==undefined){
            array[0]= head.val;
        }
        else{
            if(array[count]>head.val){
                array[count+1]= head.val;
                count++;
            }
            else{
                while(array[count]<head.val){
                    array.splice(count, 1);
                    count--;
                }
                array.push(head.val);
                count++;                
            }
        }
        head= head.next;
    }

    let newLL= {};
    let current= newLL;

    for(let i= 0; i<array.length; i++){
        if(i==array.length-1){
            current.val= array[i];
            current.next= null;
        }
        else{
            current.val= array[i];
            current.next= {};
            current= current.next;
        }
    }

    return newLL;
};