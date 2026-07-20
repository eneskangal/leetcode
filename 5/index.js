function longestPalindrome(s){
    let ans= "";

    function expand(left, right) {
        while(left>=0&&right<s.length&&s[left]=== s[right]){        
            if(right-left+1> ans.length){
                ans= s.slice(left, right+1);
            }
            left--;
            right++;
        }
    }

    for(let i= 0; i<s.length; i++){
        expand(i, i);
        expand(i, i+1);
    }
    return ans;
}