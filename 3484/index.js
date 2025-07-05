let Spreadsheet= function(rows){
    this.spread= {};       
};

Spreadsheet.prototype.setCell= function(cell, value){
    this.spread[cell]= value;     
};


Spreadsheet.prototype.resetCell= function(cell){
    this.spread[cell]= 0;         
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue= function(formula){
    let array= formula.slice(1).split("+");
    if(this.spread[array[0]]!=undefined){
        if(this.spread[array[1]]!=undefined){
            return this.spread[array[0]]+this.spread[array[1]];
        }
        else{            
            if(!isNaN(array[1][0])){
                return this.spread[array[0]]+(array[1]*1);                
            }
            else{
                return this.spread[array[0]];                
            }
        }
    }
    else{
        if(this.spread[array[1]]!=undefined){            
            if(!isNaN(array[0][0])){
                return this.spread[array[1]]+(array[0]*1);                
            }
            else{
                return this.spread[array[1]];                
            }
        }
        else{
            if(!isNaN(array[0][0])){
                if(!isNaN(array[1][0])){
                    return (array[0]*1)+(array[1]*1);                            
                }
                else{
                    return (array[0]*1);  
                }                            
            }
            else{
                if(!isNaN(array[1][0])){
                    return array[1]*1;                            
                }
                else{
                    return 0;  
                }                
            }
        }        
    }  
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */