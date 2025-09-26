let onesMinusZeros= function(grid){
    let rows= {};
    let cols= {};
    let gridLength= grid.length;
    let subGridLength= grid[0].length;

    for(let i= 0; i<gridLength; i++){
        rows[i]= {["zeros"]: 0, ["ones"]: 0};
        
        for(let k= 0; k<subGridLength; k++){            
            if(grid[i][k]==1){
                rows[i]["ones"]++;                              
                if(cols[k]==undefined){
                    cols[k]= {["zeros"]: 0, ["ones"]: 1}; 
                }
                else{
                    cols[k]["ones"]++;
                } 
            }
            else{
                rows[i]["zeros"]++;                              
                if(cols[k]==undefined){
                    cols[k]= {["zeros"]: 1, ["ones"]: 0}; 
                }
                else{
                    cols[k]["zeros"]++;
                }
            }   
        }    
    } 

    let answers= [];
    for(let i= 0; i<gridLength; i++){
        answers[i]= [];
        for(let k= 0; k<subGridLength; k++){
            answers[i].push((rows[i]["ones"]+cols[k]["ones"])-(rows[i]["zeros"]+cols[k]["zeros"]));
        }   
    } 
    return answers;
};