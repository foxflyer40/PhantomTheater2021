// set up server
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000


// middleware
app.use(express.static(path.resolve('./client/public')))








// path home
app.get('*', (req, res) => {
   res.sendFile(path.resolve('/index.html'))
})

// start the server
app.listen(port, ()=> {console.log(`Listening on port: ${port}`)})