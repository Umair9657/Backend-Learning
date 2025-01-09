const http = require('http')

http.createServer(function (req,res){
    res.write ('<h1>Hello, World!</h1>')
}).listen(3000, () => {
    console.log("Server is running in this port http://localhost:3000/");
    
})

/*
    Inform the client about the response:

Without setting the Content-Type, the browser might not correctly interpret the response.
For example, if you are sending HTML but don’t specify text/html, the browser might treat it as plain text and display raw HTML code.
Control the response format:

You can change the Content-Type depending on the content being sent:
application/json for JSON data.
text/plain for plain text.
image/png for PNG images.
*/ 