let destCity= function(paths){
    let data=[]     
    for(let i=0; i<paths.length; i++){
        for(let x=0; x<2; x++){
            if(data.includes(paths[i][x])){
                data.splice(data.indexOf(paths[i][x],0),1)
            }
            else{
                data.push(paths[i][x])
            }                                    
        }
    }
    for(let k=0; k<paths.length; k++){
        if(data.includes(paths[k][1])){
            return paths[k][1]
        }
    }          
}
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))