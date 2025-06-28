let findCenter= function(edges){
    let data=[]    
    for(let i=0; i<edges.length; i++){
        for(let x=0; x<edges[i].length; x++){
            console.log(data)
            if(data.includes(edges[i][x])){                              
                return edges[i][x]                                              
            }
            else{
                data.push(edges[i][x])               
            }
        }
    }      
}