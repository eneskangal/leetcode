let sortVowels= function(s){
    let array= new Array(5);
    for(let i= 0; i<array.length; i++){
        array[i]= {char: null, length: 0, index: null};
    }
    let anotherArray= new Array(s.length).fill(0);

    for(let i= 0; i<s.length; i++){
        if(s[i]=="a"){
            array[0].char= s[i];
            array[0].length++;      
            if(array[0].index==null){
                array[0].index= i;
            }         
        }
        else if(s[i]=="e"){
            array[1].char= s[i];
            array[1].length++;
            if(array[1].index==null){
                array[1].index= i;
            }                
        }
        else if(s[i]=="i"){
            array[2].char= s[i];
            array[2].length++;    
            if(array[2].index==null){
                array[2].index= i;
            }             
        }
        else if(s[i]=="o"){
            array[3].char= s[i];
            array[3].length++;   
            if(array[3].index==null){
                array[3].index= i;
            }             
        }
        else if(s[i]=="u"){
            array[4].char= s[i];
            array[4].length++;  
            if(array[4].index==null){
                array[4].index= i;
            }            
        }
        else{
            anotherArray[i]= s[i];
        } 
    }

    array= array.sort((a,b)=>{
        if(b.length>a.length){
            return 1;
        }
        else if(b.length<a.length){
            return -1;
        }
        else{
            if(a.index<b.index){
                return -1;
            }
            if(a.index>b.index){
                return 1;
            }
            return 0;
        }
    });    
    for(let i= 0; i<anotherArray.length; i++){
        if(anotherArray[i]==0){
            anotherArray[i]= array[0].char;
            array[0].length--;
            if(array[0].length==0){
                array.shift();
            }
        }
    }

    return anotherArray.join("");
};