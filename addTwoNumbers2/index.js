let addTwoNumbers= function(l1, l2){
    let obj= {["head"]: {}};
    let iter= obj.head;
    let first= "";
    let second= "";
    while(l1){
        first+= l1.val;
        l1= l1.next;
    }
    while(l2){
        second+= l2.val;
        l2= l2.next;
    }
    let i= first.length-1;
    let k= second.length-1;
    let contain= 0;
    while(i>-1||k>-1){
        if(i>-1){
            if(k>-1){
                if((first[i]-0)+(second[k]-0)+(contain-0)>9){
                    if(i-1==-1&&k-1==-1){
                        iter.val= ((first[i]-0)+(second[k]-0)+(contain-0))%10;
                        iter.next= {};
                        iter.next.val= ((first[i]-0)+(second[k]-0)+(contain-0)+"")[0]-0;
                        iter.next.next= null;
                        iter= iter.next.next;
                        i--;
                        k--; 
                    }
                    else{
                        iter.val= ((first[i]-0)+(second[k]-0)+(contain-0))%10;
                        contain= ((first[i]-0)+(second[k]-0)+(contain-0)+"")[0];
                        iter.next= {};
                        iter= iter.next;
                        i--;
                        k--; 
                    }
                }
                else{
                    if(i-1==-1&&k-1==-1){
                        iter.val= (first[i]-0)+(second[k]-0)+(contain-0);
                        contain= 0;
                        iter.next= null;
                        iter= iter.next;
                        i--;
                        k--;  
                    }
                    else{
                        iter.val= (first[i]-0)+(second[k]-0)+(contain-0);
                        contain= 0;
                        iter.next= {};
                        iter= iter.next;
                        i--;
                        k--;  
                    }                                      
                }
            }
            else{
                if((first[i]-0)+(contain-0)>9){
                    if(i-1==-1){
                        iter.val= ((first[i]-0)+(contain-0))%10;
                        iter.next= {};
                        iter.next.val= (((first[i]-0)+(contain-0)).toString())[0]*1;
                        iter.next.next= null;                        
                        iter= iter.next.next;
                        i--;
                    }
                    else{
                        iter.val= ((first[i]-0)+(contain-0))%10;
                        iter.next= {};
                        contain= (((first[i]-0)+(contain-0)).toString())[0]*1;                     
                        iter= iter.next;
                        i--;
                    }
                }
                else{
                    if(i-1==-1){
                        iter.val= ((first[i]-0)+(contain-0));
                        iter.next= null;
                        iter= iter.next;                        
                        i--;
                    }
                    else{
                        iter.val= ((first[i]-0)+(contain-0));
                        iter.next= {};
                        contain= 0;                  
                        iter= iter.next;
                        i--;
                    }                                        
                }
            }
        }
        else{
            if((second[k]-0)+(contain-0)>9){
                if(k-1==-1){
                    iter.val= ((second[k]-0)+(contain-0))%10;
                    iter.next= {};
                    iter.next.val= (((second[k]-0)+(contain-0)).toString())[0]*1;
                    iter.next.next= null;                        
                    iter= iter.next.next;
                    k--;
                }
                else{
                    iter.val= ((second[k]-0)+(contain-0))%10;
                    iter.next= {};
                    contain= (((second[k]-0)+(contain-0)).toString())[0]*1;                   
                    iter= iter.next;
                    k--;
                }
            }
            else{
                if(k-1==-1){
                    iter.val= ((second[k]-0)+(contain-0));
                    iter.next= null;
                    iter= iter.next;                        
                    k--;
                }
                else{
                    iter.val= ((second[k]-0)+(contain-0));
                    contain= 0;
                    iter.next= {};               
                    iter= iter.next;
                    k--;
                }                                        
            }
        }        
    }    
    let reverseLL= {head: {}};
    let iterTwo= obj.head;
    let iterThree= reverseLL.head; 
    while(iterTwo!=null){        
        if(iterTwo.next==null){
            if(iterThree.val==undefined){
                iterThree= {val: iterTwo.val, next: null};
            } 
            else{
                iterThree= {val: iterTwo.val, next: iterThree};
            }   
        }
        else{            
            if(iterThree.val==undefined){
                iterThree= {val: iterTwo.val, next: null};
            } 
            else{
                iterThree= {val: iterTwo.val, next: iterThree};
            }        
        }
        iterTwo= iterTwo.next;
    }  
    return iterThree;
};