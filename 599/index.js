let findRestaurant= function(list1, list2){
    let hash= {};

    for(let i= 0; i<list1.length; i++){
        hash[list1[i]]= i;
    }  

    let min= 2001;
    let array= [];

    for(let i= 0; i<list2.length; i++){
        if(hash[list2[i]]!=undefined){
            let indexofSum= hash[list2[i]]+i;
            if(min>indexofSum){
                min= indexofSum;
                array= [];
                array.push(list2[i]);
            } 
            else if(min==indexofSum){
                min= indexofSum;
                array.push(list2[i]);
            }
        }
    }  

    return array; 
};