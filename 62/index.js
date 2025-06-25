const obj= {};
let uniquePaths= function(m, n){
    let sum= 0;
    if(m<3){
        if(n==1){
            sum++;
        }
        else{
            if(m==1){
                sum++;
            }
            else{
                sum+= n;
            }
        }
    }
    else{
        if(n==1){
            sum++;
        }
        else if(n==2){
            sum+= m;
        }
        else if(obj[`${m}x${n}`]){
            sum+=  obj[`${m}x${n}`];
        }
        else{ 
            let value= uniquePaths(m-1, n);   
            let value2= uniquePaths(m, n-1);           
            sum+= value;
            sum+= value2;
            obj[`${m}x${n}`]= value+value2;
        }
    }    
    return sum;
}  