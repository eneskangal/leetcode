class Allocator{
    constructor(n){
        this.memory= new Array(n).fill(0);
        this.n= n;
    }
    allocate(size, mID){
        for(let i= 0; i <= this.n - size; i++){
            let isFree= true;
            for (let j= 0; j < size; j++){
                if(this.memory[i + j] !== 0){
                    isFree= false;
                    break;
                }
            }


            if(isFree){
                for(let j= 0; j < size; j++){
                    this.memory[i + j]= mID;
                }
                return i;
            }
        }

        return -1;
    }

    freeMemory(mID){
        let freed= 0;
        for (let i= 0; i < this.n; i++){
            if(this.memory[i] === mID){
                this.memory[i]= 0;
                freed++;
            }
        }
        return freed;
    }
}