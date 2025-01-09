// in URL MODULE IT PARSING THE URL FOR EXTRACTING THE INFORMATION FROM THE URL 


const url = require('url')

const myUrl = "https://chatgpt.com:3000/c/677cc03e-1858-8009-8bfc-e9c5069b3397#section1"

const parseUrl = url.parse(myUrl, true);   // if i write false in this it not treat like an object and display raw data 

console.log(parseUrl.hostname);
console.log(parseUrl.protocol);
console.log(parseUrl.pathname);
console.log(parseUrl.port);
console.log(parseUrl.query);
console.log(parseUrl.hash);


