let maximumScore= function(a, b, c){
    let array=  [a,b,c];    
    array= array.sort((a,b)=>{
        return b-a;
    })
    let point= 0;
    
    while(true){
        if(array[0]==0&&array[1]==0){
            return point;
        }
        else if(array[1]==0&&array[2]==0){
            return point;
        }
        else if(array[0]==0&&array[2]==0){
            return point;
        }
        if(array[0]>0&&array[1]>0){
            array[0]--;
            array[1]--;
        } 
        else if(array[1]>0&&array[2]>0){
            array[1]--;
            array[2]--;
        }
        else if(array[0]>0&&array[2]>0){
            array[0]--;
            array[2]--;
        }
        point++;
        array= array.sort((a,b)=>{
            return b-a;
        });
    }
};