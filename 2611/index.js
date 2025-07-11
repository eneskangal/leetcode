let miceAndCheese= function maxPoints(reward1, reward2, k){
    const n= reward1.length;
    const diffWithIndex= [];
    for(let i= 0; i<n; i++){
        const diff= reward1[i]-reward2[i];
        diffWithIndex.push({diff: diff, index: i});
    }

    diffWithIndex.sort((a, b) => b.diff - a.diff);

    const firstMouseSet= new Set();
    for(let i= 0; i<k; i++){
        firstMouseSet.add(diffWithIndex[i].index);
    }

    let total= 0;
    for(let i=0; i<n; i++){
        if(firstMouseSet.has(i)){
            total+= reward1[i];
        } 
        else{
            total+= reward2[i];
        }
    }
    return total;
}