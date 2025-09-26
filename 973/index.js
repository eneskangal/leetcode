let kClosest= function(points, k){
    let array= [];
    for(let i= 0; i<points.length; i++){
        let result= Math.sqrt((points[i][0]**2)+(points[i][1]**2));
        array.push({index: i, result});
    }    

    array= array.sort((a,b)=>{
        return a["result"]-b["result"];
    });

    let answers= [];
    for(let i= 0; i<k; i++){
        answers.push(points[array[i]["index"]]);
    }
    
    return answers;
};