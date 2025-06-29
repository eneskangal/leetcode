/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    if(password.length<8){
        return false;
    }
    else if(!password.match(/[a-z]/)){
        return false;
    }
    else if(!password.match(/[A-Z]/)){
        return false;
    }
    else if(!password.match(/[0-9]/)){
        return false;
    }
    else if(!password.match(/[!@#$%^+&*()-]/)){
        return false;
    }
    for(let i=0; i<password.length-1; i++){
        if(password[i]==password[i+1]){
            return false;
        }
    }
    return true;
};