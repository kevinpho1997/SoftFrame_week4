var fs = require('fs');

module.exports = function(req, res){
    var un = req.body.username;
    var pw = req.body.password;
    c = un + pw;
    console.log(c);

    fs.readFile('./server/data/users.json', 'utf8', function(err, data) {
        // filepath is respecting where server.js is
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);

        let i = userArray.findIndex(user =>
            ((user.username == un) && (user.password == pw))
        );
        if (i == -1) {
            res.send({"valid": false});
        } else {
            console.log(userArray[i]);
            res.send({"valid": true});
        }
    });
}
