let promiseAll= function(functions){
    return new Promise((resolve, reject) =>{
        const results= [];
        let completed= 0;
        functions.forEach((fn, index) => {
            fn()
                .then((res) =>{
                    results[index]= res;
                    completed++;
                    if(completed=== functions.length){
                        resolve(results);
                    }
                })
                .catch(reject); 
        });
        if(functions.length === 0){
            resolve([]);
        }
    });
};