let getLastMoment= function(n, left, right){
    if(left.length==0){
        minRight= Math.min(...right);
        return n-minRight;
    }
    else if(right.length==0){
        maxLeft= Math.max(...left);
        return maxLeft;
    }
    else{
        minRight= Math.min(...right);
        maxLeft= Math.max(...left);
        if(n-minRight>= maxLeft-0){
            return n-minRight; 
        }
        return maxLeft;
    }    
};