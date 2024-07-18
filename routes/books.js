const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req, res) => {
    res.send('All books')
})

router.get('/new', (req, res) => {
    res.send('New book')
})

router.post('/', async (req, res) => {
    res.send('Create book')
})
module.exports = router