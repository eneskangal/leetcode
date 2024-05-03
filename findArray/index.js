let findArray= function(pref){
    const fakePref= [...pref]
    for(let i=1; i<pref.length; i++){
        fakePref[i]= pref[i-1]^pref[i];
    }
    return fakePref;
};