require('dotenv').config()
const express = require('express')
const cors = require('cors')
const episodes  = require('./data/episode')
const router = require('./router')

const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin:'*',
    credentials:true,            
    optionSuccessStatus:200,
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log('Server work on port:', PORT))
    } catch (error) {
        console.log(error)
    }
}

start()

module.exports = app;