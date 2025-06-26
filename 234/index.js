let isPalindrome= function(head){
    let data=[]
    while(head!=null){
        data.push(head.val)
        head=head.next
    }    
    return data.join("")===data.reverse().join("") ? true : false
};