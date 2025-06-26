let WordDictionary= function(){
    this.data= [];    
};


WordDictionary.prototype.addWord= function(word){
    this.data.push(word);     
};


WordDictionary.prototype.search= function(word){   
    for(let i= 0; i<this.data.length; i++){
        if(word.length==this.data[i].length){
            let isTrue= true;
            let dataIndex= 0;
            for(let k= 0; k<word.length; k++){                
                if(word[k]=="."){
                    dataIndex++;
                }
                else if(this.data[i][dataIndex]==word[k]){
                    dataIndex++;
                }
                else{
                    isTrue= false;
                    break;
                }              
            }
            if(isTrue){
                return true;
            }            
        }        
    }
    return false;    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */