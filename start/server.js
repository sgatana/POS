const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const db = require('../models')
const authorize = require('./middleware/authorize')

const app = express()
global.db = db
app.use(bodyParser.json())
app.use(authorize)
app.use(router)
app.get('/', (req, res) => res.json({ message: 'welcome to POS Online' }))

// handle all other errors
app.use((error, req, res, next) => {
  res.status = error.status || 500
  res.json({
    error: error.message,
  })
  next()
})
module.exports = app
