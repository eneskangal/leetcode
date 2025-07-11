let FrequencyTracker= function(){
    this.fres= {}; 
    this.numbers= {};   
};

FrequencyTracker.prototype.add= function(number){      
    if(this.numbers[number]==undefined){
        if(this.fres[1]==undefined){
            this.numbers[number]= 1;
            this.fres[1]= {};
            this.fres[1]["count"]= 1;
            this.fres[1][number]= 1;
        }
        else{
            this.numbers[number]= 1; 
            this.fres[1][number]= 1;   
            this.fres[1]["count"]+= 1;        
        }
    }
    else{        
        let level= this.numbers[number];
        if(this.fres[level+1]==undefined){
            this.numbers[number]+= 1;
            this.fres[level+1]= {};
            this.fres[level+1][number]= level+1;
            this.fres[level+1]["count"]= 1;
            if(this.fres[level]["count"]==1){
                delete this.fres[level];
            }            
            else{
                delete this.fres[level][number];
                this.fres[level]["count"]-= 1;
            }
        }
        else{
            this.numbers[number]+= 1;
            this.fres[level+1][number]= level+1;
            this.fres[level+1]["count"]+= 1;
            if(this.fres[level]["count"]==1){
                delete this.fres[level];
            }            
            else{
                delete this.fres[level][number];
                this.fres[level]["count"]-= 1;
            }          
        }                      
    }    
};

FrequencyTracker.prototype.deleteOne= function(number){    
    let level= this.numbers[number]; 
    if(level==undefined){
        return ;
    }
    if(level==1){
        if(this.fres[level]["count"]==1){
            delete this.numbers[number];
            delete this.fres[level];
        }
        else{
            delete this.numbers[number];  
            delete this.fres[level][number];    
            this.fres[level]["count"]-= 1;     
        }  
    }
    else if(this.fres[level-1]==undefined){
        this.fres[level-1]= {count: 1};
        this.fres[level-1][number]= level-1;  
        if(this.fres[level]["count"]==1){
            this.numbers[number]-= 1;
            delete this.fres[level];
        }
        else{
            this.numbers[number]-= 1; 
            this.fres[level]["count"]-= 1;          
        }                     
    }
    else{
        this.fres[level-1][number]= level-1;  
        this.fres[level-1]["count"]+= 1; 
        if(this.fres[level]["count"]==1){
            this.numbers[number]-= 1;
            delete this.fres[level];
        }
        else{
            this.numbers[number]-= 1; 
            this.fres[level]["count"]-= 1;          
        } 
    }  
};

FrequencyTracker.prototype.hasFrequency= function(frequency){
    if(this.fres[frequency]!=undefined){
        return true;
    }    
    return false;
};