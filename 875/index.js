function minEatingSpeed(piles, h){
    let left= 1;
    let right= Math.max(...piles);

    while(left<right){
        let mid= Math.floor((left+right)/2);
        let hours= 0;

        for(let pile of piles){
            hours+= Math.ceil(pile/mid);
        }

        if(hours>h){
            left= mid+1;
        } 
        else{
            right= mid;
        }
    }
    return left;
}