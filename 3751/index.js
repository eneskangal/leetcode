let totalWaviness= function(num1, num2){
    if(num2<100){
        return 0;
    }
    let wav= 0;
    function find(number){
        let toString= number+"";
        for(let i= 1; i<toString.length-1; i++){
            if(toString[i-1]<toString[i]&&toString[i]>toString[i+1]){
                wav++;
            }
            if(toString[i-1]>toString[i]&&toString[i]<toString[i+1]){
                wav++;
            }
        }
    }

    for(let i= num1; i<=num2; i++){
        find(i);
    } 

    return wav;   
};