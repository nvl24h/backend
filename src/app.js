require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()

// init middlewarea
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init db
require('./dbs/init.mongodb.js')
const { checkOverload } = require('./helpers/check.connect.js')
// checkOverload() 


// init router
app.get('/', (req, res, next) => {
    return res.status(500).json({
        message: 'Welcome fnatipjs',
    })
})


// handling error

module.exports = app