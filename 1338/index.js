let minSetSize= function(arr){
    let max= Math.max(...arr);
    let array= new Array(max+1).fill(0);

    for(let i= 0; i<arr.length; i++){
        array[arr[i]]++;
    }  

    array.sort((a,b)=>{
        return b-a;
    });

    let arrLength= arr.length/2;
    let sum= 0;
    let index= 0;
    let count= 0;
    
    while(true){
        if(sum+array[index]>=arrLength){
            return count+1;
        }
        else{
            sum+= array[index];
            count++;
            index++;
        }
    } 
};