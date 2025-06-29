let pivotInteger= function(n){
    let toplam=0
    let toplam2=0
    for(let i=1; i<=n; i++){
        toplam=i*(i+1)/2                      
        if(i==1){                      
            if(n===1){
                return 1
            }
            else{
                toplam2=(n*(n+1)/2)-(toplam) 
            }
        }
        else{ 
            toplam2=(n*(n+1)/2)-(toplam-(i))           
            if(toplam===toplam2){
                return i
            }           
        }            
    }
    return -1
}