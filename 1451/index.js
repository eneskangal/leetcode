let arrangeWords= function(text){
    const lowerText= text.toLowerCase();
    const words= lowerText.split(' ');
    words.sort((a, b) => a.length - b.length);
    words[0]= words[0][0].toUpperCase()+words[0].slice(1);
    return words.join(' ');
};