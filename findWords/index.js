let findWords = function (words) {
    const array = [];
    for (let i = 0; i < words.length; i++) {
        const firstRow = words[i].match(/["qwertyuiop"]/ig);
        const secondRow = words[i].match(/["asdfghjkl"]/ig);
        const thirdRow = words[i].match(/["zxcvbnm"]/ig);
        if (firstRow != null && firstRow.length == words[i].length) {
            if (firstRow.join("") == words[i]) {
                array.push(words[i]);
            }
        }
        else if (secondRow != null && secondRow.length == words[i].length) {
            if (secondRow.join("") == words[i]) {
                array.push(words[i]);
            }
        }
        else if (thirdRow != null && thirdRow.length == words[i].length) {
            if (thirdRow.join("") == words[i]) {
                array.push(words[i]);
            }
        }
    }
    return array;
};