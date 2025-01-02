/*  
What it does: This imports the built-in http module in Node.js.
The http module is used to create web servers and handle HTTP requests and responses.
Why use it: It provides tools to set up a basic server to handle incoming requests.
Alternative: You can use frameworks like Express.js for easier and more feature-rich server handling.  */
const http = require('http');

/*
What it does: Creates an HTTP server.
The http.createServer() function takes a callback function with two arguments:
req (request): Contains information about the incoming HTTP request (like the URL, headers, etc.).
res (response): Used to send a response back to the client.
Why use it: It sets up the server to listen for and respond to incoming requests.
*/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World Umair bhi!');
}).listen(8080);