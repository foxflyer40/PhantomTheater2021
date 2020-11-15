// set up server
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
require('dotenv').config()


// middleware
app.use(express.static(path.resolve('./client/public')))


//  app.get('/admin')



// app.get('/artist')





// path home
app.get('*', (req, res) => {
   res.sendFile(path.resolve('/index.html'))
})

// start the server
app.listen(port, ()=> {console.log(`Listening on port: ${port}`)})