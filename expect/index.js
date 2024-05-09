let expect= function(val){
    return {
        toBe: (toBeVal)=>{
            if(toBeVal===val){
                return true;
            }
            else{
                throw 'Not Equal';
            }            
        }, 
        notToBe: (notToBeVal)=>{
            if(notToBeVal!==val){
                return true;                
            }
            else{
                throw 'Equal';
            }           
        }
    }; 