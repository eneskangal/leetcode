let validPalindrome= function(s){
    let left= 0;
    let right= s.length-1;
    let isIn= false;
    const isPalindrome= (left, right)=>{
    while(left<right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    while(left<=right){
        if(s[left]!=s[right]){
          return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);              
        }
        else{
            left++;
            right--;
        }
    }
    return true;    
};