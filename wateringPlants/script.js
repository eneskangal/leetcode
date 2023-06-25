let wateringPlants= function(plants, capacity){
    let plant=0
    let oldugunYer=0
    let donecekDeger=0
    let ilkCapacity=capacity
    for(let i=0; i<plants.length; i++){        
        if(plants[i]<=capacity){
            oldugunYer--
            donecekDeger++
            capacity-=plants[i]
        }
        else{
            donecekDeger+=-1*(oldugunYer*2)+1
            oldugunYer--           
            capacity=ilkCapacity
            capacity-=plants[i]           
        }
    }
    return donecekDeger    
}
console.log(wateringPlants([2,2,3,3],5))