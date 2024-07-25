let compactObject= function(obj){       
    if(obj.length==undefined){
        let data= {};
        for(let prop in obj){      
            if(typeof obj[prop]=="object"&&obj[prop]!=null){                
                let deger= compactObject(obj[prop]);
                data[prop]= deger;
            }
            else{
                if(obj[prop]!=false&&obj[prop]!=null){
                    data[prop]= obj[prop];
                }
            }            
        }
        return data;
    }
    else{
        let data= []; 
        for(let i= 0; i<obj.length; i++){
            if(typeof obj[i]=="object"&&obj[i]!=null){
                let deger= compactObject(obj[i]);
                data.push(deger);
            }
            else{
                if(obj[i]!=false&&obj[i]!=null){
                    data.push(obj[i]);
                }
            }
        }
        return data;   
    }     
};