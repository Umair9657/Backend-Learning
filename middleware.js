/*const express = require('express');

const app = express();

// Custom middleware function
const myMiddleware = (req, res, next) => {
    console.log('Middleware function executed');
    next();// Pass control to the next middleware or route handler
};

// Apply middleware
app.use(myMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});*/


const express = require('express')
const app = express();

app.use(function(req,res,next){
    console.log("Waiting for your response");
    next();
})

app.get('/', function(req,res){
    res.send("After running middleware your route running")
})

app.listen(3000)