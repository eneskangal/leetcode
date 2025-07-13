let maxNumberOfBalloons= function(text){
    let chars= {"b": "b", "a":"a", "l": "l", "o": "o", "n": "n"};
    let obj= {};
    for(let i= 0; i<text.length; i++){
        if(chars[text[i]]!=undefined){
            if(obj[text[i]]==undefined){
                obj[text[i]]= 1;
            }
            else{
                obj[text[i]]+= 1;
            }
        }
    }

    let max= obj["b"];
    for(let value in obj){
        if(value!="b"){
            if(value=="n"&&obj[value]==max){
            }
            else if(value=="a"&&obj[value]==max){
            }
            else if(value=="l"&&obj[value]==max*2){
            }
            else if(value=="o"&&obj[value]==max*2){
            }
            else{
                let keys= Object.keys(obj).length;
                if(obj["l"]>=2&&obj["o"]>=2&&keys==5){
                    return Math.min(obj["b"], obj["a"], Math.trunc(obj["l"]/2), Math.trunc(obj["o"]/2), obj["n"]);
                }
                return 0;
            }
        }       
    }
    if(max==undefined){
        return 0;
    }
    let keys= Object.keys(obj).length;
    if(obj["l"]>=2&&obj["o"]>=2&&keys==5){
        return Math.min(obj["b"], obj["a"], Math.trunc(obj["l"]/2), Math.trunc(obj["o"]/2), obj["n"]);
    }
    return 0;
};