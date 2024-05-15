let freqAlphabets = function (s) {
    const alphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ]
    let string = "";
    for (let i = 0; i < s.length;) {
        if (s[i + 2] == "#") {
            string += alphabets[s[i] + s[i + 1] - 1];
            i += 3;
        }
        else {
            string += alphabets[s[i] - 1];
            i++;
        }
    }
    return string;
};