const express = require('express')  // npm install express --save
const app = express()
const port = 5000

const mongoose = require('mongoose')  // npm install mongoose --save

// mongodb connect
mongoose.connect('mongodb+srv://heoaa:dkgus0023@node-react-basic.kplc8dt.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err))


// localhost:5000
app.get('/', (req, res) => res.send('Hello!'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))


