let compress= function(chars){
    for(let i= 0; i<chars.length;){
        if(chars[i]!=chars[i+1]){
            i++;
        }
        else{            
            let count= 2;
            let k= i+2;
            while(chars[i+1]==chars[k]){
                count++;
                k++;                
            }         
            if(count<10){
                chars[i+1]= count+"";
                chars.splice(i+2, k-(i+2));
                i+= 2;
            }
            else if(count<100){
                let str= count+"";
                chars[i+1]= str[0];
                chars[i+2]= str[1];
                chars.splice(i+3, k-(i+3));
                i+= 3;
            }
            else if(count<1000){
                let str= count+"";
                chars[i+1]= str[0];
                chars[i+2]= str[1];
                chars[i+3]= str[2];
                chars.splice(i+4, k-(i+4));
                i+= 4;
            }
            else{
                let str= count+"";
                chars[i+1]= str[0];
                chars[i+2]= str[1];
                chars[i+3]= str[2];
                chars[i+4]= str[3];
                chars.splice(i+5, k-(i+5));
                i+= 5;
            }
        }
    }    
};