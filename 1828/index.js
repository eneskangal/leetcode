let countPoints= function(points, queries){
    let answers= [];

    for(let i= 0; i<queries.length; i++){
        let count= 0;
        for(let k= 0; k<points.length; k++){  
            let formul= (points[k][0]-queries[i][0])**2;
            let formul2= (points[k][1]-queries[i][1])**2;
            if(queries[i][2]>= Math.sqrt(formul+formul2)){
                count++;
            }
        } 
        answers.push(count);       
    }    
    return answers;
};