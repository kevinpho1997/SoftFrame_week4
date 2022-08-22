var express = require("express");
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));
import {User} from "./routes/users.ts";

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My first Nodejs server!");
    console.log(`Server listening on: ${host}, port: ${port}`);
});

app.get('/', function(req, res) {
    res.send("Hello World");
}) 

app.get('api/auth', function(req, res) {
    console.log("@ Get Auth");
    res.sendFile(__dirname + '/www/api/auth.html');
});

app.post('api/auth', function(req, res) {
    console.log("@ Post Auth");
    user1 = new User("kevinpho", "18/07/1997", 25, "kevin.pho@", "yep");
    user2 = new User("yeji", "01/01/2000", 22, "yeji@email.com", "nope");
    user3 = new User("dahyun", "01/01/1998", 24, "dahyun@email.com", "maybe")
});
