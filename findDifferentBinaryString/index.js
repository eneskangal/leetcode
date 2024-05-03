let findDifferentBinaryString= function(nums){
    const numsLength= nums.length;
    const obj= {};
    for(let i=0; i<numsLength; i++){
        const convertBinary= parseInt(nums[i], 2);        
        obj[convertBinary]= convertBinary+""; 
    }
    for(let i=0; i<2**i; i++){
        if(!obj[i]){
            const numtoBin= i.toString(2); 
            return numtoBin.padStart(numsLength,"0");
        }
    }
};