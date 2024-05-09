let canPlaceFlowers= function(flowerbed, n){
    for(let i=0; i<flowerbed.length; i++){
        if(n==0){
            return true;
        }
        if(i==0){
            if(flowerbed[i+1]==0&&flowerbed[i]!=1){
                flowerbed[i]= 1;
                n--;
            }
            else if(flowerbed.length==1&&flowerbed[i]==0){
                return true;
            }
        }
        else if(i==flowerbed.length-1&&flowerbed[i]!=1&&flowerbed[i-1]!=1){
            return n==1;
        }
        else{
            if(flowerbed[i+1]==0&&flowerbed[i-1]==0&&flowerbed[i]==0){
                flowerbed[i]= 1;
                n--;
            }
        }
    }
    return n==0;
};