'use strict'

const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send(`${new Date().toISOString()}: Welcome to ${req.path}`)
    console.log(new Date().toISOString(), req.path, 200);
})

app.get('/g', (req, res) => {
    res.send(`${new Date().toISOString()}: Welcome to ${req.path}`)
    console.log(new Date().toISOString(), req.path, 200);
})

app.listen(PORT, () => console.log(`Listening on ${PORT} @ ${new Date().toISOString()}`))