const http = require('http');
const fs = require('fs');    // Why use it? To read HTML files from the file system and serve them to clients.
const url = require('url');  // Why use it? To extract the file name (or path) from the URL requested by the client.


// Create the server
http.createServer((req, res) => {
  // Parse the request URL
  const parsedURL = url.parse(req.url, true);   // req.url is the URL requested by the client (e.g., /about.html)
  const fileName = parsedURL.pathname.substring(1); // Remove the leading "/"  Extracts the file name from the URL path by removing the leading /.
                                                     // Example: /about.html → about.html.
  
// Default to "index.html" if no file is specified
  const fileToServe = fileName || 'index.html';

  // Read and serve the requested file
  fs.readFile(fileToServe, (err, data) => {
    if (err) {
      // If the file is not found, send a 404 response
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>404 Not Found</h1>');
      res.write('<p>The requested file does not exist.</p>');
    } else {
      // If the file is found, send it to the client
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
    res.end();
  });
}).listen(3000);

console.log('Server is running at http://localhost:3000');
