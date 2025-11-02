let minMoves= function(target, maxDoubles){
    if(maxDoubles==0){
        return target-1;
    }
    else{
        let count= 0;
        while(target>1){
            if(target%2==0&&maxDoubles){
                count++;
                target/= 2;
                maxDoubles--;
            }
            else{
                count++;
                target--;
            }
        }
        return count;
    }    
};