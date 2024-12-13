let minOperations= function(n){
    let sum= 0;
    if(n%2==1){
        let left= 0;       
        let right= n-1;   
        while(left<Math.floor(n/2)){
            sum+= ((2*right)+1)-(2*Math.floor(n/2)+1);  
            left++;
            right--;
        }
        return sum;
    }
    else{
        let left= Math.floor(n/2)-1;       
        let right= Math.floor(n/2);   
        while(left>-1){
            sum+= ((2*right)+1)-(2*Math.floor(n/2));  
            left--;
            right++;
        }
        return sum;
    }        
};