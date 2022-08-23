// week 5.3 lecture notes
const express = require("express");
const app = express();

var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/week4tut')));

const path = require('path');
const http = require('http').Server(app);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

import {User} from "./routes/users.ts";

let server = http.listen(3000, function () {
    // let host = server.address().address;
    // let port = server.address().port;
    console.log(`Server listening on port 3000`);
});

app.post('/login', require('./routes/postLogin'));
app.post('/loginafter', require('./routes/postLoginAfter')); 

// app.get('api/auth', function(req, res) {
//     console.log("@ Get Auth");
//     res.sendFile(__dirname + '/www/api/auth.html');
// });

// app.post('api/auth', function(req, res) {
//     console.log("@ Post Auth");

//     let user1 = new User("kevinpho", "18/07/1997", 25, "kevin.pho@", "yep", false);
//     let user2 = new User("yeji", "01/01/2000", 22, "yeji@email.com", "nope", false);
//     let user3 = new User("dahyun", "01/01/1998", 24, "dahyun@email.com", "maybe", false);

//     let users = [user1, user2, user3];

//     // for (let i = 0; i < users.length; i++){
        
//     // }
// });
