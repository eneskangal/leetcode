function checkStrings(s1, s2){
    let even1= [];
    let odd1= [];
    let even2= [];
    let odd2= [];

    for(let i= 0; i<s1.length; i++){
        if(i%2===0){
            even1.push(s1[i]);
            even2.push(s2[i]);
        } 
        else{
            odd1.push(s1[i]);
            odd2.push(s2[i]);
        }
    }

    even1.sort();
    even2.sort();
    odd1.sort();
    odd2.sort();

    // İki grup da aynı mı?
    return even1.join('')===even2.join('')&&odd1.join('')===odd2.join('');
}