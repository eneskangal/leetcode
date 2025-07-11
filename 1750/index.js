let minimumLength= function(s){
    let left= 0;
    let right= s.length-1;
    let sLength= s.length;
    let count= sLength;
    while(left<right){
        if(s[left]==s[right]){
            left++;
            right--;
            count-= 2;
        }
        else{
            if(s[left]==s[right+1]){
                left++;
                count-= 1;
            }
            else if(s[right]==s[left-1]){
                right--;
                count-= 1;
            }
            else{
                if(left==0){
                    return sLength;
                }
                return count;
            }            
        }
    }
    if(s[left]==s[right+1]){
        return 0;
    }
    else if(s[right]==s[left-1]){
        return 0;
    }
    else{
        return count;
    }  
};