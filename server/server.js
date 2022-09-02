// week 5.3 lecture notes
const express = require("express");
const app = express();

var cors = require('cors');
app.use(cors());

const path = require('path');
const http = require('http').Server(app);

// dep
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist/week4tut')));

let server = http.listen(3000, function () {
    // let host = server.address().address;
    // let port = server.address().port;
    console.log(`Server listening on port 3000`);
});

// app.post('/api/auth', require('./routes/api-login'));
require('./routes/api-login.js')(app, path);

