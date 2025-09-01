let Bank= function(balance){
    this.hash= {};
    for(let i= 0; i<balance.length; i++){
        this.hash[i+1]= {["money"]: balance[i]};
    }    
};

Bank.prototype.transfer= function(account1, account2, money){
    if(this.hash[account1]&&this.hash[account1]["money"]>=money){        
        if(this.hash[account2]){
            this.hash[account1]["money"]-= money;
            this.hash[account2]["money"]+= money;
            return true;
        }
        else{
            return false;
        }        
    }
    else{
        return false;
    }  
};


Bank.prototype.deposit= function(account, money){
    if(this.hash[account]){
        this.hash[account]["money"]+= money;   
        return true; 
    }
    else{
        return false;
    }
};


Bank.prototype.withdraw= function(account, money){
    if(this.hash[account]&&this.hash[account]["money"]>=money){
        this.hash[account]["money"]-= money;
        return true;
    }
    else{
        return false;
    }    
};