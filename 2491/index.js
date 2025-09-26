function dividePlayers(skill){
    const n= skill.length;

    if(n%2!== 0) return -1;

    skill.sort((a,b)=>a-b);

    const totalSkill= skill[0]+skill[n-1];
    let chemistrySum= 0;

    let i= 0;
    let j= n-1;

    while(i<j){
        const pairSum= skill[i]+skill[j];
        if (pairSum!==totalSkill){
            return -1;
        }

        chemistrySum+= skill[i]*skill[j];
        i++;
        j--;
    }
    return chemistrySum;
}