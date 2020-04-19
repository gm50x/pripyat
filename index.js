'use strict'

const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send(`${new Date().toISOString()}: Welcome to ${req.path}`)
})

app.get('/g', (req, res) => {
    res.send(`${new Date().toISOString()}: Welcome to ${req.path}`)
})

app.listen(PORT, () => console.log(`Listening on ${PORT} @ ${new Date().toISOString()}`))