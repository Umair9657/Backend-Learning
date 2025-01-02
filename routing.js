const express = require('express')
     const app = express()
     const port = 3000


// Get Request Examlpe
app.get('/', (req, res) => {
  res.send('This is Get Request Example')
})

app.post('/items', (req, res) => {
  res.send("This is post request")
})

app.put

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})       
