let modifyString= function(s){
    let array=s.split("").map(t=>t)
    function harfGonder(arr1, arr2, arr3=true, arr4=true){
        let harfler=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]        
        if(arr3==true&&arr4==true){
            let harfSecimi=Math.floor(Math.random()*harfler.length)
            if(String.fromCharCode(arr1)!=harfler[harfSecimi]&&String.fromCharCode(arr2)!=harfler[harfSecimi]){
                return harfler[harfSecimi]
            } 
            else{
                return harfGonder(arr1, arr2)
            }           
        }
        else{
            let harfSecimi=Math.floor(Math.random()*harfler.length)        
            if(String.fromCharCode(arr1)!=harfler[harfSecimi]&&
                String.fromCharCode(arr2)!=harfler[harfSecimi]&&
                String.fromCharCode(arr3)!=harfler[harfSecimi]&&
                String.fromCharCode(arr4)!=harfler[harfSecimi]){
                return harfler[harfSecimi]
            }
            else{
                return harfGonder(arr1, arr2, arr3, arr4)
            }           
        }       
    }    
    for(let i=0; i<s.length; i++){        
        if(s[i]=="?"){
            if(i==0){
                if(i==s.length-1){
                    array[i]="a"
                }
                else{
                    array[i]=harfGonder(array.join("").charCodeAt(i+1)-1, array.join("").charCodeAt(i+1))                               
                }
            }
            else if(i==s.length-1){
                if(i==0){
                    array[i]="b"                
                }
                else{
                    array[i]=harfGonder(array.join("").charCodeAt(i-1), array.join("").charCodeAt(i-1)+1)   
                }
            }
            else{
                array[i]=harfGonder(array.join("").charCodeAt(i-1), array.join("").charCodeAt(i+1), array.join("").charCodeAt(i-1)+1, array.join("").charCodeAt(i+1)-1) 
            } 
        }               
    }    
    return array.join("")
}
console.log(modifyString("?zs"))