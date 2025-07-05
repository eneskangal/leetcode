function minMutation(startGene, endGene, bank){
    const geneBank= new Set(bank);
    if(!geneBank.has(endGene))return -1;
    const queue= [[startGene, 0]];
    const genes= ['A', 'C', 'G', 'T'];

    while(queue.length > 0){
        const [current, steps]= queue.shift();

        if(current === endGene){
            return steps;
        }

        for(let i = 0; i < current.length; i++){
            for(let gene of genes){
                if(gene === current[i]) continue;

                const mutated= current.slice(0, i)+gene+current.slice(i + 1);

                if(geneBank.has(mutated)){
                    queue.push([mutated, steps + 1]);
                    geneBank.delete(mutated);
                }
            }
        }
    }

    return -1;  // Ulaşılamıyorsa -1 döndür
}
