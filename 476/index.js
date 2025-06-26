/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let numto2Base= num.toString(2).split("");
    for(let i=0; i<numto2Base.length; i++){
        if(numto2Base[i]=="1"){
            numto2Base[i]= "0";
        }
        else{
            numto2Base[i]="1";
        }
    }
    return parseInt(numto2Base.join(""),2);
};