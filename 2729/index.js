let isFascinating= function(n){
    let nx2= n*2;  
    let nx3= n*3; 
    let concat= ""+n+nx2+nx3;
    
    if(concat.length==9){
        let obj= {
            "1":"1",
            "2":"2",
            "3":"3",
            "4":"4",
            "5":"5",
            "6":"6",
            "7":"7",
            "8":"8",
            "9":"9"
        };

        for(let i= 0; i<9; i++){
            if(obj[concat[i]]==undefined){
                return false;
            }
            else{
                delete obj[concat[i]];
            }
        }
        return true;
    }
    return false;       
};