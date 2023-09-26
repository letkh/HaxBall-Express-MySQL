const express = require('express') 
const mysql = require('mysql')
const app = express()

const dbconfig = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
}

//MYSQL FUNCTIONS

function test(req, res) {
    console.log('POST Request - test')
}

app.get('/', function(req, res) {
    res.json('hello!')
})

app.post('/mysql', (req, res) => {
    switch (req.body.mode) {
        case 'test':
            test(req, res)
    }
})
module.exports = app;