let checkStraightLine= function(coordinates){
    let bool=true
    let egim=(((coordinates[0][1]-coordinates[1][1])/(coordinates[0][0]-coordinates[1][0])))
    for(let i=2; i<coordinates.length; i++){
        if(egim==Infinity||egim==-Infinity&&bool){
            bool=false        
        }     
        else{
            if((egim!=(((coordinates[i-1][1]-coordinates[i][1])/(coordinates[i-1][0]-coordinates[i][0])||!bool)))){return false}            
        }               
    }
    return true
}
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]))