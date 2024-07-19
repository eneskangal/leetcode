let memo= [0, 1, 1];
let tribonacci= function(n){  
    if(n>memo.length-1){
        let length= n-(memo.length-1);
        for(let i= 0; i<length; i++){
            memo.push(memo[memo.length-1]+memo[memo.length-2]+memo[memo.length-3]);
        }
        return memo[n];
    }
    return memo[n];    
};