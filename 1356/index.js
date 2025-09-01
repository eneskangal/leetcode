let sortByBits= function(arr){
    let hash= {};
    let array= [];

    for(let i= 0; i<arr.length; i++){
        let count= 0;
        for(let k= 1; k<=arr[i]; k*=2){
            if(arr[i]&k){
                count++;
            }
        }
        if(hash[count]==undefined){
            hash[count]= [arr[i]];
        }
        else{
            hash[count].push(arr[i]);
        }        
    }

    for(let bit in hash){
        array.push(...hash[bit].sort((a,b)=>{
            return a-b;
        }));
    }    

    return array;
};