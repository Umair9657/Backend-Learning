const http = require('http')

//create a server object:
http.createServer(function(req, res){
    res.write("Hello server 2");  //write a response to the client
    res.end();  //end the response
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/'); //the server object listens on port 
    
});
