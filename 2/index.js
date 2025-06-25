let addTwoNumbers= function(l1, l2){
    let obj= {["head"]: {}};
    let iter= obj.head;
    let rem= 0;
    while(l1!=null||l2!=null){
        if(l1!=null){
            if(l2!=null){
                if(rem+l1.val+l2.val>9){
                    if(l1.next){
                        if(l2.next){
                            iter.val= (rem+l1.val+l2.val)%10;
                            iter.next= {};
                            rem= Math.floor((rem+l1.val+l2.val)/10);
                            iter= iter.next;
                            l1= l1.next;
                            l2= l2.next;                            
                        }
                        else{                            
                            iter.val= (rem+l1.val+l2.val)%10;
                            iter.next= {};
                            rem= Math.floor((rem+l1.val+l2.val)/10);
                            iter= iter.next;
                            l1= l1.next;
                            l2= null;                            
                        }
                    }
                    else if(l2.next){
                        iter.val= (rem+l1.val+l2.val)%10;;
                        iter.next= {};
                        rem= Math.floor((rem+l1.val+l2.val)/10);
                        iter= iter.next;
                        l2= l2.next;
                        l1= null;                          
                    }
                    else{
                        iter.val= (rem+l1.val+l2.val)%10;
                        iter.next= {};
                        iter.next.val= Math.floor((rem+l1.val+l2.val)/10);
                        iter.next.next= null
                        rem= 0;
                        iter= iter.next.next;
                        l2= null;
                        l1= null;  
                    } 
                }
                else if(rem+l1.val+l2.val<10){
                    if(l1.next){
                        if(l2.next){
                            iter.val= rem+l1.val+l2.val;
                            iter.next= {};
                            rem= 0;
                            iter= iter.next;
                            l1= l1.next;
                            l2= l2.next;
                            
                        }
                        else{
                            iter.val= rem+l1.val+l2.val;
                            iter.next= {};
                            rem= 0;
                            iter= iter.next;
                            l1= l1.next;
                            l2= null;                            
                        }
                    }
                    else if(l2.next){
                        iter.val= rem+l1.val+l2.val;
                        iter.next= {};
                        rem= 0;
                        iter= iter.next;
                        l2= l2.next;
                        l1= null;                          
                    }
                    else{
                        iter.val= rem+l1.val+l2.val;                        
                        iter.next= null;
                        iter= iter.next;
                        rem= 0;
                        l2= null;
                        l1= null;                        
                    }                                                   
                }            
            }
            else{
                if(rem+l1.val+0>9){
                    if(l1.next){                        
                        iter.val= (rem+l1.val+0)%10;
                        iter.next= {};
                        rem= Math.floor((rem+l1.val+0)/10);
                        iter= iter.next;
                        l1= l1.next;
                        l2= null;                            
                    }                    
                    else{
                        iter.val= (rem+l1.val+0)%10;
                        iter.next= {};
                        iter.next.val= Math.floor((rem+l1.val+0)/10);
                        iter.next.next= null;
                        rem= Math.floor((rem+l1.val+0)/10);
                        iter= iter.next.next;
                        l2= null;
                        l1= null;  
                    } 
                }
                else if(rem+l1.val+0<10){
                    if(l1.next){                        
                        iter.val= (rem+l1.val+0);
                        iter.next= {};
                        rem= 0;
                        iter= iter.next;
                        l1= l1.next;
                        l2= null;                            
                    }                    
                    else{
                        iter.val= (rem+l1.val+0);
                        iter.next= null;
                        rem= (rem+l1.val+0);
                        iter= iter.next;
                        l2= null;
                        l1= null;  
                    } 
                }
            }             
        }
        else if(l2!=null){
            if(rem+0+l2.val>9){
                if(l2.next){
                    iter.val= (rem+0+l2.val)%10;
                    iter.next= {};
                    rem= Math.floor((rem+0+l2.val)/10);
                    iter= iter.next;
                    l2= l2.next;
                    l1= null;   
                }
                else{
                    iter.val= (rem+0+l2.val)%10;
                    iter.next= {};
                    iter.next.val= (rem+0+l2.val)/10;
                    iter.next.next= null;
                    rem= 0;
                    iter= iter.next.next;
                    l2= null;
                    l1= null;                    
                }                
            }
            else if(rem+0+l2.val<10){
                if(l2.next){
                    iter.val= rem+0+l2.val;
                    iter.next= {};
                    rem= 0;
                    iter= iter.next;
                    l2= l2.next;
                    l1= null;   
                }
                else{
                    iter.val= rem+0+l2.val;
                    iter.next= null;
                    rem= 0;
                    iter= iter.next;
                    l2= null;
                    l1= null;                    
                }                
            }           
        }                 
    }
    return obj.head; 
};