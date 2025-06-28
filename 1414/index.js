let findMinFibonacciNumbers= function(k){
    let memo= [1,1];
    let length= memo.length-1;
    let count= 0;
    if(k==1){
        return 1;
    }
    if(k>memo[length]){
        while(k>memo[length]){
            memo.push(memo[length]+memo[length-1]);
            length++;
        }
        while(length>0){
            if(memo[length]>k){
                length--;
            }
            else{
                count++;
                k-= memo[length];
            }
        }               
    }
    return count;  
};