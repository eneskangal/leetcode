let minFlips= function(a, b, c){
    a= a.toString(2).padStart(32, 0);
    b= b.toString(2).padStart(32, 0);  
    c= c.toString(2).padStart(32, 0);   
    let count= 0;

    for(let i= 0; i<a.length; i++){
        if(c[i]==0){
            if(a[i]==1){
                if(b[i]==1){
                    count+= 2;
                }
                else{
                    count++;
                }
            }
            else if(b[i]==1){
                count+= 1;
            }
        }
        else{
            if(a[i]==1||b[i]==1){

            }
            else{
                count++;
            }
        }
    }  
    return count;
};