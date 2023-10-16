require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const episodes  = require('./data/episode')
const path = require('path')

const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))


app.get('/', (req, res) => {
    res.status(200).json(episodes)
})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server work on port:', PORT))
    } catch (error) {
        console.log(error)
    }
}

start()