let fibGenerator= function*(){
    let prev=0
    let next=1             
    while(true){
        let eski=prev             
        yield prev        
        prev=next
        next+=eski                                                                           
    }            
}