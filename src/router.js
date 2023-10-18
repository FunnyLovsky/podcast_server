const express = require('express')
const router = express.Router();
const episodes = require('./data/episode')

router.get('/', (req, res) => {
    res.send('Here you can get API: /episodes; /blogs')
})

router.get('/episodes', (req, res) => {
    res.status(200).json(episodes)
})

module.exports = router