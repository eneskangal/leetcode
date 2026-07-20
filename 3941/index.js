let passwordStrength= function(password){
    let hash= {};
    let point= 0;

    for(let i= 0; i<password.length; i++){
        if(hash[password[i]]==undefined){
            hash[password[i]]= 1;
            if(password.charCodeAt(i)>96&&password.charCodeAt(i)<123){
                point++;
            }
            else if(password.charCodeAt(i)>64&&password.charCodeAt(i)<91){
                point+= 2;
            }
            else if("0123456789".includes(password[i])){
                point+= 3;
            }
            else{
                point+= 5;
            }
        }
    } 
    return point;   
};