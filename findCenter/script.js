let findCenter= function(edges){
    let data=[]    
    for(let i=0; i<edges.length; i++){
        for(let x=0; x<edges[i].length; x++){            
            if(data.includes(edges[i][x])){                              
                return edges[i][x]                                              
            }
            else{
                data.push(edges[i][x])               
            }
        }
    }      
}
console.log(findCenter([[1,2],[2,3],[4,2]]))