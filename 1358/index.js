function numberOfSubstrings(s){
    let count= 0;
    let freq= {a: 0, b: 0, c: 0};
    let left= 0;

    for (let right= 0; right<s.length; right++){
        freq[s[right]]++;

        while(freq.a>0&&freq.b>0&&freq.c>0){
            count+= s.length-right;
            freq[s[left]]--;
            left++;
        }
    }
    return count;
}