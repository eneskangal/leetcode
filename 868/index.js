let binaryGap= function(n){
    n= n.toString(2);
    let max= 0;
    let subGap= 0;
    let isIn= false;
    for(let i= 0; i<n.length; i++){
        if(n[i]=="1"){
            if(isIn==false){
                subGap++;
                isIn= true;
            }
            else{
                max= Math.max(subGap, max);
                subGap= 1;
            }
        }
        else{
            subGap++;
        }
    }   
    return max; 
};