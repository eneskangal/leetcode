let isValidSudoku= function(board){
    for(let i=0; i<9; i+=3){
        if(true){
            let hash= {};
            let row= i;
            let col= 0;
            while(row<i+3&&col<i+3){
                if(hash[board[row][col]]==undefined&&board[row][col]!="."){
                    hash[board[row][col]]= board[row][col];
                } 
                else if(hash[board[row][col]]!=undefined&&board[row][col]!="."){
                    return false;
                }                
                if(col<2){
                    col++;
                }
                else{
                    row++;
                    col= 0;
                }
            }

            hash= {};
            row= i;
            col= 3;
            while(row<i+3&&col<6){
                if(hash[board[row][col]]==undefined&&board[row][col]!="."){
                    hash[board[row][col]]= board[row][col];
                } 
                else if(hash[board[row][col]]!=undefined&&board[row][col]!="."){
                    return false;
                }                
                if(col<5){
                    col++;
                }
                else{
                    row++;
                    col= 3;
                }
            }

            hash= {};
            row= i;
            col= 6;
            while(row<i+3&&col<9){
                if(hash[board[row][col]]==undefined&&board[row][col]!="."){
                    hash[board[row][col]]= board[row][col];
                } 
                else if(hash[board[row][col]]!=undefined&&board[row][col]!="."){
                    return false;
                }                
                if(col<8){
                    col++;
                }
                else{
                    row++;
                    col= 6;
                }
            }
        }
    }

    for(let i= 0; i<9; i++){
        let hash= {};
        for(let k= 0; k<9; k++){
            if(hash[board[i][k]]==undefined&&board[i][k]!="."){
                hash[board[i][k]]= true;                
            }
            else if(hash[board[i][k]]!=undefined){
                return false;               
            }
        }
    }    

    for(let i= 0; i<9; i++){
        let hash= {};
        for(let k= 0; k<9; k++){
            if(hash[board[k][i]]==undefined&&board[k][i]!="."){
                hash[board[k][i]]= true;                
            }
            else if(hash[board[k][i]]!=undefined){
                return false;               
            }
        }
    }
    return true;
};