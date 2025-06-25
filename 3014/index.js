let minimumPushes= function(word, base= 1){  
    if(word.length<9){
        return word.length*base;
    }
    else{
        return (8*base)+minimumPushes(word.slice(8), base+1);
    }   
};