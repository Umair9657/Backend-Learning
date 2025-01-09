const express = require('express')
const app = express();

app.use(function(req,res,next){
    console.log("Middleware is running");
    next();
});

app.get("/", function(req, res) {
    res.send("Hello world")
});




//A special method, all, is provided by Express to handle all types of http methods at a particular route using the same function.
/*app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });*/

app.listen(3000)