const express = require('express')
const router = express.Router();
const episodes = require('./data/episode')
const blogs = require('./data/blogs')
const blogsCateg = require('./data/blogsCateg')
const episodesCateg = require('./data/episodeCateg')

router.get('/', (req, res) => {
    res.send('Here you can get API: /episodes; /blogs')
})

router.get('/episodes', (req, res) => {
    const {limit} = req.query;

    if(limit) {
        res.status(200).json(episodes.slice(0, limit))
    }
    
    res.status(200).json(episodes)
})

router.get('/blogs', (req, res) => {
    const {limit} = req.query;

    if(limit) {
        res.status(200).json(blogs.slice(0, limit))
    }
    
    res.status(200).json(blogs)
})

router.get('/categ', (req, res) => {
    const {type} = req.query;

    if(type == 'blogs') {
        res.status(200).json(blogsCateg)
    }
    
    if(type == 'episodes') {
        res.status(200).json(episodesCateg)
    }   
    
    res.status(400).json({message: 'Error 404'})
})


module.exports = router