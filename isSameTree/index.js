let isSameTree= function(p, q){
    if(p==null&&q==null){   
        return true;           
    }
    else if(p==null&&q!=null){
        return false;
    }
    else if(p!=null&&q==null){
        return false;
    }
    else if(p.val!=q.val){
        return false;
    }    
    else{
        const deger= isSameTree(p.left, q.left);
        if(deger==false){
            return false;
        }
        else{
            return isSameTree(p.right, q.right);
        }
    }
};