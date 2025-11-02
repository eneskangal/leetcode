let firstCompleteIndex= function(arr, mat){
    if(mat[1]==undefined){
        return 0;
    }
    else{
        if(mat[0][1]==undefined){
            return 0;
        }
    }

    let rowLength= mat[0].length;
    let colLength= mat.length;    
    let rows= {};
    let cols= {};
    let hash= {};
    for(let i= 0; i<colLength; i++){
        for(let k= 0; k<rowLength; k++){
            hash[mat[i][k]]= [i+1, k+1];
        }        
    }

    for(let i= 0; i<arr.length; i++){        
        if(rows[hash[arr[i]][0]]==undefined){
            rows[hash[arr[i]][0]]= {count: 1};
            if(cols[hash[arr[i]][1]]==undefined){
                cols[hash[arr[i]][1]]= {count: 1};
            }
            else{
                if(cols[hash[arr[i]][1]]["count"]==colLength-1){
                    return i;
                }
                else{
                    cols[hash[arr[i]][1]]["count"]++;
                }
            }
        }
        else{
            if(rows[hash[arr[i]][0]]["count"]==rowLength-1){
                return i;
            }
            else{
                rows[hash[arr[i]][0]]["count"]++;  
                if(cols[hash[arr[i]][1]]==undefined){
                    cols[hash[arr[i]][1]]= {count: 1};
                }
                else{
                    if(cols[hash[arr[i]][1]]["count"]==colLength-1){
                        return i;
                    }
                    else{
                        cols[hash[arr[i]][1]]["count"]++;
                    }
                }              
            }
        }
    }
};