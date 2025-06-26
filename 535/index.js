/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const links= {};
const characters ='abcdefghijklmnopqrstuvwxyz0123456789';

function shortUrl(longUrl){
    let returnString= "";
    for(let i=0; i<6; i++){
        returnString+= characters[Math.floor(Math.random()*characters.length)];
    }
    return returnString;
}

let encode= function(longUrl){
    const tinyUrl= shortUrl(longUrl);
    if(links[tinyUrl]){
        return encode(longUrl);
    }
    else{
        links[tinyUrl]= longUrl;
        return tinyUrl;
    }
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
let decode= function(shortUrl){
    return links[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */