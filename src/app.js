// require dependencies
const path = require('path')
const mongoose = require('mongoose')
const app = require('express')()

// setting up environment variables
require('dotenv').config({silent: false})
const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI || 'mongodb://localhost/tododb'

// setting up mongoose
mongoose.connect(DBURI)

// setting up the routers
const searchRouter = require('./searchRouter')
app.use('/api/imgsearch', searchRouter)
const recentRouter = require('./recentRouter')
app.use('/api/recent', recentRouter)

// setting up a homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

// setting up the server
app.listen(PORT, () => console.log('App running on port: ' + PORT))
