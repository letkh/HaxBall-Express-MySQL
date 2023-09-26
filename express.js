const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./api')
const app = express();

app.use(cors({origin: 'https://www.haxball.com'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', api)

app.use(function (req, res, next){
    const err = new Error('Not Found');
    err.status = 404;
    res.header('Content-Type', 'application/json')
    next(err)
})

// DEBUG
//
// app.use(function (err, req, res, next){
//     res.status(err.status || 500);
//     res.json({
//         message: err.mmessage,
//         error: {}
//     })
//     console.log({
//       message: err.mmessage,
//       error: {},
//     });
// })

app.set('port', 3333);

const server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port)
})