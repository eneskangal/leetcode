let isPalindrome= function(s){
    s= s.toLowerCase();
    let reverseIndex= s.length-1;
    for(let i=0; i<s.length;){      
        if(s[i]!=s[reverseIndex]){  
            if(s.charCodeAt(i)<97&&s.charCodeAt(i)>57||s.charCodeAt(i)<48||s.charCodeAt(i)>122){
                i++;
            }                                      
            else{
                if(s.charCodeAt(reverseIndex)<97&&s.charCodeAt(reverseIndex)>57||s.charCodeAt(reverseIndex)<48||s.charCodeAt(reverseIndex)>122){
                    reverseIndex--;
                }                              
                else{
                    return false; 
                }              
            }
        }               
        else{
            if(i==s.length-1||reverseIndex==0){
                return true;
            } 
            i++;
            reverseIndex--;              
        }             
    }
    return true;
};