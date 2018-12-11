const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const db = require('../models')

const app = express()
global.db = db
app.use(bodyParser.json())
app.use(router)
app.get('/', (req, res) => res.json({ message: 'welcome to POS Online' }))
module.exports = app
